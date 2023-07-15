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
    type: Schema.Types.ObjectId,
    ref: "Category",
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
});

module.exports = mongoose.model("Product", ProductSchema);
