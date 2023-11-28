const { Sequelize } = require("sequelize");

const db = new Sequelize(
  "greenhurricane",
  "greenhurricane",
  "mGZKfLHmkknev4ccMR6w",
  {
    host: "localhost",
    dialect: "postgres",
    logging: false, // true to display queries in the console
  }
);

module.exports = db;
