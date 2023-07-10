const Product = require("../models/Product");
const User = require("../models/User");
const path = require("path");

const getAllProducts = async (req, res) => {
  try {
    const allProducts = await Product.find({});
    console.log(allProducts);
    res.json(allProducts);
  } catch (error) {
    res.send({ message: "An error occured." });
    console.log(error);
  }
};

const addProduct = async (req, res) => {
  // Get the unique userID from header
  const userId = req.userId;
  console.log(userId);

  const { name, price, description, category, stock } = req.body;

  const imagePath = req.file?.path;

  /* Normalize the image path using path module. Without this, Windows will make use of
  backward slashes which is not readable by web systems and other OSs */
  const normalizedImagePath = imagePath.split(path.sep).join("/");

  try {
    const postedProduct = await Product.create({
      name,
      description,
      category,
      image: normalizedImagePath,
      stock,
      price,
    });
    res.send({ message: "New product added!" });
    console.log(postedProduct);
  } catch (error) {
    res.send({ message: "An error occured. Please try again later" });
    console.log(error);
  }
};

const purchaseProduct = async (res, req) => {
  const userId = req.userId;

  if (userId) {
    try {
      const productId = req.params.id;
      const product = await Product.findById(productId);

      if (!product) {
        return res.status(404).json({ error: "Product not found" });
      }

      // Check if the product is in stock
      if (product.stock === 0) {
        return res.status(400).json({ error: "Product out of stock" });
      }

      // Update the stock
      product.stock -= 1;
      await product.save();

      res.json({ message: "Product purchased successfully" });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  } else {
    res.send.json("You must be logged in to perform this action.");
  }
};

module.exports = { getAllProducts, addProduct, purchaseProduct };
