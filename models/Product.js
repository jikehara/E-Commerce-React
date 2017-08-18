const mongoose = require('mongoose')

const ProductSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  image: { type: String, require: true }
})

module.exports = mongoose.model('Product', ProductSchema)
