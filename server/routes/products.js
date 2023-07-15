const express = require("express");
const router = express.Router();
const upload = require("../middleware/multer");
const {
  getAllProducts,
  addProduct,
  deleteProduct,
  purchaseProduct,
} = require("../controllers/productController");

// router.get("/", getAllProducts);
router.route("/").get(getAllProducts).post(upload.single("image"), addProduct);
router.route("/:id").delete(deleteProduct);

module.exports = router;
