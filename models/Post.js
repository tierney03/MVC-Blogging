const { Model, DataTypes } = require("sequelize");
const Sequelize = require("../config/connection");

class Post extends Model {}

Post.init({
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  post: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = { Post };
