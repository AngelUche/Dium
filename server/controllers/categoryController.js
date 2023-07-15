const Category = require("../models/Category");
const Product = require("../models/Product");

const getCategories = async (req, res) => {
    const user = req.user;
    if (!user) {
        return res.status(401).json({ message: "You are not logged in" });
    }
    try {
        const categories = await Category.find({});
        res.json(categories);
    } catch (error) {
        res.status(401).json({ message: "An error occurred. Please try again later" });
        console.log(error);
    }
}
