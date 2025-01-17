const Sequelize = require("sequelize");
const dbConfig = require("./config/dbconfig");

const Associado = require("../models/Associado");
const Cliente = require("../models/Cliente");
const Motoboy = require("../models/Motoboy");
const Entrega = require("../models/Entrega");

const connection = new Sequelize(dbConfig);

Associado.init(connection);
Cliente.init(connection);
Motoboy.init(connection);
Entrega.init(connection);

Associado.associate(connection.models);
Cliente.associate(connection.models);
Motoboy.associate(connection.models);
Entrega.associate(connection.models);

module.exports = connection;
