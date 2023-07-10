const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CartSchema = new Schema({
  product: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Product",
    required: true,
  },
  quantity: {
    type: Number,
    default: 1,
  },
  price: {
    type: Number,
    required: true,
  },
  favorite: {
    type: Boolean,
    default: false,
  },
  confirmed: { Boolean },
});

module.exports = mongoose.model("Cart", CartSchema);