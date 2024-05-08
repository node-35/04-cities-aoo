const { getAll, create, getOne, remove, update } = require('../controllers/continent.controllers');
const express = require('express');

const continentRouter = express.Router();

continentRouter.route('/continents')
    .get(getAll)
    .post(create);

continentRouter.route('/continents/:id')
    .get(getOne)
    .delete(remove)
    .put(update);

module.exports = continentRouter;