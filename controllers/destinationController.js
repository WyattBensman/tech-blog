const User = require('../models/userModel');
const Post = require('../models/postModel')

const DestinationController = {

    renderHome: async (req, res) => {
        try {
            const allPostData = await Post.findAll({
                include: [
                    {
                        model: Painting,
                        attributes: ['filename', 'description'],
                    },
                ],
            });

            const allPost = allPostData.map((post) =>
                post.get({ plain: true })
            );

            res.render('home', {
                allPost,
                loggedIn: req.session.loggedIn,
            });
        } catch (err) {
            console.log(err);
            res.status(500).json(err);
        }
    },

    renderCreatePost: async (req, res) => {
        try {
            res.render('post/createPost');
        } catch (error) {
            console.error(error);
            res.status(500).send('Error rendering Post Form');
        }
    }
}