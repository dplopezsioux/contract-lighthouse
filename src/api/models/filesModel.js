const { DataTypes } = require("sequelize");
const db = require("../../config/dbConfig");

const File = db.define("File", {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  path: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

File.belongsTo(User);

module.exports = File;
