const { Model, DataTypes } = require("sequelize");
const Sequelize = require("../config/connection");

class Comment extends Model {}

Comment.init({});