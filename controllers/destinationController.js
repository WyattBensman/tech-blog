const Post = require('../models/postModel')

const DestinationController = {

    renderHome: async (req, res) => {
        try {
            const allPostData = await Post.findAll();

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

    renderDashboard: async (req, res) => {
        // Need to render a list of the blog post that have same authorID as userID
        // Find all blog post, then filter
        try {
            res.render('dashboard');
        } catch (error) {
            console.error(error);
            res.status(500).send('Error rendering Login');
        }
    },

    renderCreatePost: async (req, res) => {
        try {
            res.render('createPost');
        } catch (error) {
            console.error(error);
            res.status(500).send('Error rendering Creating Post');
        }
    },

    renderEditPost: async (req, res) => {
        try {
            res.render('editPost');
        } catch (error) {
            console.error(error);
            res.status(500).send('Error rendering Editing Post');
        }
    },

    renderLogin: async (req, res) => {
        try {
            res.render('login');
        } catch (error) {
            console.error(error);
            res.status(500).send('Error rendering Login');
        }
    },

    renderSignup: async (req, res) => {
        try {
            res.render('signup');
        } catch (error) {
            console.error(error);
            res.status(500).send('Error rendering Login');
        }
    },

}

module.exports = DestinationController;