const User = require("../models/User");
const Orders = require("../models/Orders");
const Cart = require("../models/CartItem");


// tested
const getOrders = async (req, res) => {
    const user = req.user;
    if (!user) {
        return res.status(401).json({ message: "You are not logged in" });
    }
    try {
        // find the user and populate the orders
        const newuser = await User.findById(user.id);
        console.log(newuser);
        // gets the orders related to the current user
        const orders = newuser.orders;
        console.log(orders);
        res.json(orders);
    } catch (error) {
        res.status(401).json({ message: "An error occurred. Please try again later" });
        console.log(error);
    }
}

//untested
const addOrder = async (req, res) => {
    const user = req.user;
    if (!user) {
        return res.status(401).json({ message: "You are not logged in" });
    }
    const cart = await Cart.findById(user.id).populate('products');
    const products = cart.product;

    try {
        result = new Orders({
            user: user.id,
            products: products.map(product => product._id),
            totalPrice:10,//total price of all products in cart pls write the code
        })
    } catch(err){
        console.log(err);
        res.status(400).json({ message: "An error occurred. Please try again later" });
    }
}

//untested
const updateOrder = async (req, res) => {
    try {
        const user = req.user;
        const foundUser = await User.findOne({username:user.username}).exec()
        const { status } = req.body;
        const order = await Orders.findById(foundUser.id);
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

//tested
const getAllOrders = async (req, res) => {
    try {
        const orders = await Orders.find();
        console.log(orders)
        res.json(orders);
    } catch (error) {
        res.status(400).json({ message: "An error occurred. Please try again later" });
        console.log(error);
    }
}


module.exports = { getOrders, addOrder, updateOrder, getAllOrders };