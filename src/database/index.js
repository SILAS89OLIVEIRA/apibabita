const Sequelize = require('sequelize');
const dbConfig = require('../config/database');

const erp_usuario = require('../models/Usuarios');

const connection = new Sequelize(dbConfig);

erp_usuario.init(connection);



module.exports = connection;

//teste