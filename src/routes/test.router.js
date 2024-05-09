const { getAll, create, getOne, remove, update } = require('../controllers/test.controllers');
const express = require('express');

const testRouter = express.Router();

testRouter.route('/tests')
    .get(getAll)
    .post(create);

testRouter.route('/tests/:id')
    .get(getOne)
    .delete(remove)
    .put(update);

module.exports = testRouter;