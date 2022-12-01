const User = require("./User");
const Post = require("./Post");
const Comment = require("./Comment");
const sequelize = require("../config/connection");

User.hasMany(Post, {
  foreignKey: "post_id",
  onDelete: "CASCADE",
});

Post.hasMany(Comment, {
  foreignKey: "comment_id",
  onDelete: "CASCADE",
});

module.exports = { User, Post, Comment };
