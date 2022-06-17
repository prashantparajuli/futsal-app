const express = require('express');
const { authController } = require('../controllers');

const router = express.Router();

router.post('/register');
router.post('/login', authController.userLogin);

module.exports = router;