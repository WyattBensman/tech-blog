const sequelize = require('../config/connection');
const User = require('../models/userModel');
const Post = require('../models/postModel');

(async () => {
    await sequelize.sync({ force: true });

    // Seed users
    const users = await User.bulkCreate([
        {
            username: 'Marshall Mathers',
            password: 'password1'
        },
        {
            username: 'Rick James',
            password: 'password2'
        }
    ]);

    // Seed posts
    const posts = await Post.bulkCreate([
        {
            title: 'Will the real slim shady please stand up? I repeat...',
            content: 'This is the content of the first post!',
            authorId: users[0].id
        },
        {
            title: 'This is the second mock post',
            content: 'This is the content of the second post',
            authorId: users[1].id
        }
    ]);

    console.log('Database seeded successfully');
    process.exit();
})();
