const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const CartItems = require("./CartItem");
const Crders = require("./Orders");

const UserSchema = new Schema({
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  cart: [
    {
      type: Schema.Types.ObjectId,
      ref: "Cart",
    },
  ],
  orders: [
    {
      type: Schema.Types.ObjectId,
      ref: "Orders",
    },
  ],
  suspended: Boolean,
  refreshToken: String,
});

module.exports = mongoose.model("User", UserSchema);
