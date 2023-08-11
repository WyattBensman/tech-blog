const sequelize = require('../config/database');
const User = require('./user');
const Post = require('./post');
/* const Comment = require('./comment'); */

// Define associations
User.hasMany(Post, { foreignKey: 'authorId', onDelete: 'CASCADE' });
Post.belongsTo(User, { foreignKey: 'authorId' });

/* Post.hasMany(Comment, { foreignKey: 'postId', onDelete: 'CASCADE' });
Comment.belongsTo(Post, { foreignKey: 'postId' });

User.hasMany(Comment, { foreignKey: 'authorId', onDelete: 'CASCADE' });
Comment.belongsTo(User, { foreignKey: 'authorID' }); */

module.exports = { User, Post };