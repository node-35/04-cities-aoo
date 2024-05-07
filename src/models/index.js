const Country = require('./Country');
const City = require('./City');
const User = require('./User');

User.belongsTo(Country);
Country.hasMany(User);

Country.hasMany(City);
City.belongsTo(Country);
