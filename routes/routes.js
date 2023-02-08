const express = require('express');
const userRegister = require('../controller/control')
const router = express.Router();


// create routes

router.post("/register", userRegister.Register);
module.exports = router;

