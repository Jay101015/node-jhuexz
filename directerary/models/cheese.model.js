const { Model, DataTypes } = require("sequelize")
const db = require("../db/db")

class Cheese extends Model {}

Cheese.init({
  id:{
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  title: {
    type: DataTypes.TEXT,
    allowNull: false,
    unique: true
  },
  decription: {
    type: DataTypes.TEXT
  },
  rating: {
    type: DataTypes.TEXT
  },
}, { sequelize: db })

module.exports = Cheese