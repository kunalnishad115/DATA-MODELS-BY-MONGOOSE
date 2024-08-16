import mongoose, { mongo } from 'mongoose';
const productSchema = new mongoose.Schema(
  {
    description: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    productImage: {
      type: String,
    },
    price: {
      type: Number,
      default: 0,
    },
    Stock: {
      default: 0,
    },
    Category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Category',
    },
    Owner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
  },
  { timestamps: true }
);
export const Product = mongoose.model('Product', productSchema);
