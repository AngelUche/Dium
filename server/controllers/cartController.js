const Cart = require("../models/CartItem");
const User = require("../models/User");

const getCart = async (req, res) => {
    const user = req.user;
    if (!user) {
        return res.status(401).json({ message: "You are not logged in" });
    }
    try {
        const cart = await Cart.findById(user.id).populate("products");
        res.json(cart);
    } catch (error) {
        res.status(401).json({ message: "An error occurred. Please try again later" });
        console.log(error);
    }
}

// adding to cart
const addToCart = async (req, res) => {
    const userInfo = req.user;
    if (!userInfo) {
        return res.status(401).json({ message: "You are not logged in" });
    }
    const user = await User.findById(userInfo.id);
    if (user){
        //this is if the frontend gives us all details
        try {
            const { product, quantity, price } = req.body;
        
            // Create a new cart item
            const cartItem = new Cart({
              user: user.id,
              products: product,
              quantity,
              price,
            });
        
            // Save the cart item
            await cartItem.save();
        
            res.status(201).json({ message: 'Cart item added successfully', cartItem });
          } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Failed to add cart item', error });
          }
          // this is more of what i imagined
    //     const { product } = req.body;
    //     const carts = await Cart.find({user: user.id});
    //     if (carts){
    //         carts.products.push(product);
    //         await carts.save();
    //         res.json(carts);
    //     } else {
    //         carts = new Cart({
    //             user: user.id,
    //             products: [product]

    //         })
    //     }
    // } else {
    //     return res.status(401).json({ message: "You are not logged in" });
    }
}

module.exports = {getCart};