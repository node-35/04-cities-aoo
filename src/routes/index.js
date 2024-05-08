const express = require('express');
const countryRouter = require('./country.router');
const userRouter = require('./user.router');
const cityRouter = require('./city.router');
const continentRouter = require('./continent.router');
const studentRouter = require('./student.router');
const courseRouter = require('./course.router');
const router = express.Router();

// colocar las rutas aquí
router.use(countryRouter);
router.use(userRouter);
router.use(cityRouter);
router.use(continentRouter);
router.use(studentRouter);
router.use(courseRouter);

module.exports = router;