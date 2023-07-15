const express = require("express");
const router = express.Router();
const { updateOrder,
    addOrder,
    getOrders,
    getAllOrders } = require("../controllers/ordersController");

router.route('/')
    .post(addOrder)
    .put(updateOrder)
    .get(getAllOrders);

router.get('/getorders',getOrders)
module.exports = router;
