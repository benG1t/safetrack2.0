import { body, param, validationResult } from 'express-validator'
import {
  BadRequestError,
  NotFoundError,
  UnauthorizedError,
} from '../errors/customErrors.js'
import { PRODUCT_CATEGORY } from '../utils/constants.js'
import mongoose from 'mongoose'
import Product from '../models/ProductModel.js'
import User from '../models/UserModel.js'

const withValidationErrors = (validateValues) => {
  return [
    validateValues,
    (req, res, next) => {
      const errors = validationResult(req)
      if (!errors.isEmpty()) {
        const errorMessages = errors.array().map((error) => error.msg)

        const firstMessage = errorMessages[0]
        console.log(Object.getPrototypeOf(firstMessage))
        if (errorMessages[0].startsWith('no product')) {
          throw new NotFoundError(errorMessages)
        }
        if (errorMessages[0].startsWith('not authorized')) {
          throw new UnauthorizedError('not authorized to access this route')
        }
        throw new BadRequestError(errorMessages)
      }
      next()
    },
  ]
}

export const validateProductInput = withValidationErrors([
  body('name').notEmpty().withMessage('name is required'),
  body('price').notEmpty().withMessage('price is required'),
  // body('image').notEmpty().withMessage('image is required'),
  body('company').notEmpty().withMessage('company is required'),
  body('description').notEmpty().withMessage('description is required'),
  body('featured')
    .isBoolean()
    .withMessage('featured property only accepts boolean'),
  body('stock').notEmpty().withMessage('stock is required'),
  body('category')
    .isIn(Object.values(PRODUCT_CATEGORY))
    .withMessage('invalid category value'),
])

export const validateIdParam = withValidationErrors([
  param('id').custom(async (value, { req }) => {
    const isValidMongoId = mongoose.Types.ObjectId.isValid(value)
    if (!isValidMongoId) throw new BadRequestError('invalid MongoDB id')
    const product = await Product.findById(value)
    if (!product) throw new NotFoundError(`no product with id ${value}`)
    // const isAdmin = req.user.role === 'admin'
    // const isOwner = req.user.userId === product.createdBy.toString()

    // if (!isAdmin && !isOwner)
    //   throw new UnauthorizedError('not authorized to access this route')
  }),
])

export const validateRegisterInput = withValidationErrors([
  body('name').notEmpty().withMessage('name is required'),
  body('email')
    .notEmpty()
    .withMessage('email is required')
    .isEmail()
    .withMessage('invalid email format')
    .custom(async (email) => {
      const user = await User.findOne({ email })
      if (user) {
        throw new BadRequestError('email already exists')
      }
    }),
  body('password')
    .notEmpty()
    .withMessage('password is required')
    .isLength({ min: 4 })
    .withMessage('password must be at least 8 characters long'),
  body('location').notEmpty().withMessage('location is required'),
  body('lastName').notEmpty().withMessage('last name is required'),
])

export const validateLoginInput = withValidationErrors([
  body('email')
    .notEmpty()
    .withMessage('email is required')
    .isEmail()
    .withMessage('invalid email format'),
  body('password').notEmpty().withMessage('password is required'),
])

export const validateUpdateUserInput = withValidationErrors([
  body('name').notEmpty().withMessage('name is required'),
  body('email')
    .notEmpty()
    .withMessage('email is required')
    .isEmail()
    .withMessage('invalid email format')
    .custom(async (email, { req }) => {
      const user = await User.findOne({ email })
      if (user && user._id.toString() !== req.user.userId) {
        throw new BadRequestError('email already exists')
      }
    }),

  body('location').notEmpty().withMessage('location is required'),
  body('lastName').notEmpty().withMessage('last name is required'),
])
