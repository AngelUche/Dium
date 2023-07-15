const express = require("express");
const router = express.Router();
const {resetPassword } = require("../controllers/forgotenPasswordController");

router.get('/', resetPassword)

module.exports = router;