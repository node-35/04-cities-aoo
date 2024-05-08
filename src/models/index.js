const Country = require('./Country');
const City = require('./City');
const User = require('./User');
const Continent = require('./Continent');
const Student = require('./Student');
const Professor = require('./Professor');
const Course = require('./Course');

User.belongsTo(Country);
Country.hasMany(User);

Country.hasMany(City);
City.belongsTo(Country);

Continent.hasMany(Country);
Country.belongsTo(Continent);

City.hasMany(Student);
Student.belongsTo(City);

Student.belongsToMany(Professor, { through: "students_professors" });
Professor.belongsToMany(Student, { through: "students_professors" });

Student.belongsToMany(Course, { through: "students_courses" });
Course.belongsToMany(Student, { through: "students_courses" });
