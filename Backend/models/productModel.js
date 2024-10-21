const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  reviews: {
    type: String,
    default: 'No reviews',
  },
  totalPurchases: {
    type: String,
    default: 'No purchase data',
  },
  image: {
    type: String,
    default: 'No image available',
  },
  rating: {
    type: Number,
    default: null,
  },
  description: {
    type: String,
    default: 'No description available',
  },
  link: {
    type: String,
    required: true,
    unique: true,
  },
  priceHistory: [
    {
      price: {
        type: Number,
      },
      checkedAt: {
        type: Date,
        default: Date.now,
      },
    },
  ],
});

// Create and export the model
const Product = mongoose.model('Product', productSchema);

module.exports = Product;
