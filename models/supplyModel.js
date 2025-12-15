const mongoose = require('mongoose');

const supplySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  category: {
    type: String,
    required: true
  },
  quantity: {
    type: Number,
    required: true,
    min: 0
  },
  unit: {
    type: String,
    required: true
  },
  condition: {
    type: String,
    default: "good"
  }
}, { timestamps: true });

module.exports = mongoose.model('Supply', supplySchema);
