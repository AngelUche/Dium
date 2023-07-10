const User = require("../models/User");

const ordersController = {
    async getOrders(req, res) {
        try {
            const userId = req.userId;
            const user = await User.findById(userId);
            const orders = user.orders;
            res.json(orders);
        } catch (error) {
            res.send({ message: "An error occurred. Please try again later" });
            console.log(error);
        }
    }
}