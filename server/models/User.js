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
  otp:{
    type: Number,
  },
  otp_date:{
    type:Date,
  },
  suspended: Boolean,
  refreshToken: String,
});

module.exports = mongoose.model("User", UserSchema);
