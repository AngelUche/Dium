const express = require("express");
const router = express.Router();
const {
  getAllProducts,
  addProduct,
  deleteProduct,
  purchaseProduct,
} = require("../controllers/productController");

// router.get("/", getAllProducts);
router.route("/").get(getAllProducts).post(addProduct);
router.route("/:id").delete(deleteProduct);

module.exports = router;
