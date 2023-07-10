const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema =  new Schema ({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    userName: {
        type: String,
        required: true,
    },
    address: {
        type: String,
        required: false,
    },
    password: {
        type: String,
        required: true,
    },
    cart: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Cart",
    }],
    orders: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Order",
    }]
})