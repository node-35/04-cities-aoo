const { DataTypes } = require('sequelize');
const sequelize = require('../utils/connection');

const Test = sequelize.define('test', {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    dueDate: {
        type: DataTypes.DATE,
        allowNull: false
    },
    // courseId
});

module.exports = Test;