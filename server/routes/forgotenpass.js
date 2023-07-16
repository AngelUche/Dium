const express = require("express");
const router = express.Router();
const {forgotPass } = require("../controllers/forgotenPasswordController");

router.get('/', forgotPass)

module.exports = router;