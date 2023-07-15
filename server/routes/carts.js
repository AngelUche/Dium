const express = require("express");
const router = express.Router();
const { getCart } = require("../controllers/cartController");

router.get("/", getCart);

module.exports = router;