import Product from '../models/ProductModel.js'
import User from '../models/UserModel.js'
import { StatusCodes } from 'http-status-codes'
import cloudinary from 'cloudinary'
import { formatImage } from '../middleware/multerMiddleware.js'

import mongoose from 'mongoose'

export const getAllProducts = async (req, res) => {
  const { search, category, featured, sort } = req.query
  console.log(req.query)

  const queryObject = {
    // createdBy: req.user.userId,
  }

  if (search) {
    queryObject.$or = [
      { name: { $regex: search, $options: 'i' } },
      { company: { $regex: search, $options: 'i' } },
    ]
  }

  if (category && category !== 'all') {
    queryObject.category = category
  }
  if (featured && featured !== 'all') {
    queryObject.featured = featured
  }

  const sortOptions = {
    newest: '-createdAt',
    oldest: 'createdAt',
    'a-z': 'position',
    'z-a': '-position',
  }

  const sortKey = sortOptions[sort] || sortOptions.newest

  const products = await Product.find(queryObject).sort(sortKey)

  const totalProducts = await Product.countDocuments(queryObject)

  res.status(200).json({ products, totalProducts })
}

export const createProduct = async (req, res) => {
  if (req.file) {
    const file = formatImage(req.file)
    const response = await cloudinary.v2.uploader.upload(file)
    req.body.image = response.secure_url
    req.body.imagePublicId = response.public_id
  }

  const product = await Product.create(req.body)
  res.status(StatusCodes.CREATED).json({ product })
}

export const getProduct = async (req, res) => {
  const product = await Product.findById(req.params.id)
  console.log(product)
  res.status(StatusCodes.OK).json({ product })
}

export const updateProduct = async (req, res) => {
  const updatedProduct = await Product.findByIdAndUpdate(
    req.params.id,
    req.body,
    {
      new: true,
    }
  )

  res
    .status(StatusCodes.OK)
    .json({ msg: 'product modified', product: updatedProduct })
}

export const deleteProduct = async (req, res) => {
  const removedProduct = await Product.findByIdAndDelete(req.params.id)
  res
    .status(StatusCodes.OK)
    .json({ msg: 'product deleted', product: removedProduct })
}

export const getApplicationStats = async (req, res) => {
  const users = await User.countDocuments()
  const product = await Product.countDocuments()
  res.status(StatusCodes.OK).json({ users, product })
}
