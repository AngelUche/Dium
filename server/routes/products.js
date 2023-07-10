const express = require("express");
const { getAllProducts } = require("../controllers/productController");
const {addProduct} = require("../controllers/productController");
const {purchaseProduct} = require("../controllers/productController");
//const {deleteProduct} = require("../controllers/productController");

function productControllerRouting() {
  const router = express.Router();
  app.use('/', router);

  router.get("/", (req, res) => {
    getAllProducts(req, res);
});
  router.post("/add", (req, res)=>{
    addProduct(req,res);
    });
  router.post("/purchase/:id", (req,res)=>{
    purchaseProduct(req,res);
    });
  //router.delete("/delete/:id", deleteProduct);
}