const { Model, DataTypes } = require("sequelize");
const Sequelize = require("../config/connection");

class Comment extends Model {}

Comment.init({
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      comment: {
        type: DataTypes.STRING,
        allowNull: false,
      },
});

module.exports = Comment;