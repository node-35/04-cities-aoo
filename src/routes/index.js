const express = require('express');
const countryRouter = require('./country.router');
const userRouter = require('./user.router');
const router = express.Router();

// colocar las rutas aquí
router.use(countryRouter);
router.use(userRouter);

module.exports = router;