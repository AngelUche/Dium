const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ProductSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  category: {
    type: String,
  },
  price: {
    type: Number,
    required: true,
  },
  image: {
    type: String,
  },
  stock: Number,
  favorite: {
    type: Boolean,
    default: false,
  },
  confirmed: { Boolean },
});

module.exports = mongoose.model("Product", ProductSchema);
