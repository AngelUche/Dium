const User = require("../models/User");
const Orders = require("../models/Orders");
const Cart = require("../models/CartItem");

const getOrders = async (req, res) => {
    try {
        const username = req.user;
        if (!username) {
            res.status(401).json({ message: "You are not logged in" });
            return;
        }
        // find the user and populate the orders
        const user = await User.findOne(username).populate("orders");
        // gets the orders related to the current user
        const orders = user.orders;
        res.json(orders);
    } catch (error) {
        res.status(400).json({ message: "An error occurred. Please try again later" });
        console.log(error);
    }
}
const addOrder = async (req, res) => {
    username= req.user;
    const user = User.findOne(username).exec()
    const cart = await Cart.findOne({ user: user.id }).populate('products');
    const products = cart.products;

    try {
        result = new Orders({
            user: user.id,
            products: products.map(product => product._id),
            totalPrice:10,//total price of all products in cart
        })
    } catch(err){
        console.log(err);
        res.status(400).json({ message: "An error occurred. Please try again later" });
    }
}
const updateOrder = async (req, res) => {
    try {
        const username = req.user;
        const user = await User.findOne(username).exec()
        const { status } = req.body;
        const order = await Orders.findById(user.id);
        if (!order) {
            res.status(404).json({ message: "Order not found" });
            return;
        }
        order.status = status;
        await order.save();
        res.json(order);
    } catch (error) {
        res.status(400).json({ message: "An error occurred. Please try again later" });
        console.log(error);
    }
}


module.exports = { getOrders, addOrder };