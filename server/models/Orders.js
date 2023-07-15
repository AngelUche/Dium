const mongoose = require("mongoose");
const Schema = mongoose.Schema;

OrderSchema = new Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
      },
      products: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product',
        required: true
      }],
      totalPrice: {
        type: Number,
        required: true
      },
      status: {
        type: String,
        default: 'pending'
      },
});

module.exports = mongoose.model("Order", OrderSchema);