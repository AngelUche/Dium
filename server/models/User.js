const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  cartItems: [
    {
      type: Schema.Types.ObjectId,
      ref: "Product",
    },
  ],
  purchasedProducts: [
    {
      type: Schema.Types.ObjectId,
      ref: "Product",
    },
  ],
  suspended: Boolean,
  refreshToken: String,
});

module.exports = mongoose.model("User", UserSchema);
