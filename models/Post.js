const { Model, DataTypes } = require("sequelize");
const Sequelize = require("../config/connection");

class Post extends Model {}

Post.init({});

module.exports = Post;