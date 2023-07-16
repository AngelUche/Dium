const express = require("express");
const router = express.Router();
const { changePassword } = require("../controllers/changePassController");

router.get('/', changePassword)

module.exports = router;