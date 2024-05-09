const { getAll, create, getOne, remove, update, setStudentCourses } = require('../controllers/student.controllers');
const express = require('express');

const studentRouter = express.Router();

studentRouter.route('/students')
    .get(getAll)
    .post(create);

studentRouter.route('/students/:id')
    .get(getOne)
    .delete(remove)
    .put(update);

studentRouter.route('/students/:id/courses')
    .post(setStudentCourses);

module.exports = studentRouter;