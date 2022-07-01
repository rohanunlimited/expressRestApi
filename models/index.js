const dbConfig = require('../config/dbconfig.js');

const {Sequelize, DataTypes} = require('sequelize');

const sequelize = new Sequelize(dbConfig.DB,dbConfig.user,dbConfig.password,{
    host:dbConfig.host,
    dialect: dbConfig.dialect
});

sequelize.authenticate();

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.employees = require('./studentModel.js')(sequelize, DataTypes);

db.sequelize.sync({force: false});

module.exports = db;