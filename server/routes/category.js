const express = require("express");
const router = express.Router();
const { getCart } = require("../controllers/categoryController");

router.get("/", getCart);

module.exports = router;