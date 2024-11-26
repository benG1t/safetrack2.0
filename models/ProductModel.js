import mongoose from 'mongoose'
import { PRODUCT_CATEGORY } from '../utils/constants.js'

const ProductSchema = new mongoose.Schema(
  {
    name: String,
    price: Number,
    image: String,
    imagePublicId: String,
    company: String,
    description: String,
    featured: Boolean,
    category: {
      type: String,
      enum: Object.values(PRODUCT_CATEGORY),
    },
    stock: Number,
    createdBy: {
      type: mongoose.Types.ObjectId,
      ref: 'User',
    },
  },
  { timestamps: true }
)

export default mongoose.model('Product', ProductSchema)
