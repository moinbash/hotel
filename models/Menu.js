const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true, // Remove leading/trailing whitespace
  },
  price: {
    type: Number,
    required: true,
   
  },
  taste: {
    type: String,
    enum: ['sweet', 'salty', 'sour'],
    required: true,
  },
  is_drink: {
    type: Boolean,
    default: false, // Default to false if not specified
  },
  ingredients: {
    type: [String], // Array of strings (e.g., ["sugar", "milk", "coffee"])
    default:[],
  },
  numofsales: {
    type: Number,
    default: 0, // Initialize sales to 0
  }
});

const Menu = mongoose.model('Product', productSchema);

module.exports = Menu;