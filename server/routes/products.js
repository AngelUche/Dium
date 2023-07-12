const express = require("express");
const router = express.Router();
const {
  getAllProducts,
  addProduct,
} = require("../controllers/productController");

// router.get("/", getAllProducts);
router.route("/").get(getAllProducts).post(addProduct);

module.exports = router;
