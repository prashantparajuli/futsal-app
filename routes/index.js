const express = require('express');

const router = express.Router();

//importing routes
const authRouter = require('./auth');

router.use('/auth', authRouter);

module.exports = router;