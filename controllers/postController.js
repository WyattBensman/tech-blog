const Post = require('../models/postModel');

const PostController = {

    createPost: async (req, res) => {
        try {
            const newPost = await Post.create({
                title: req.body.title,
                content: req.body.content
            });
            res.status(201).json(newPost);
        } catch (error) {
            console.error(error);
            res.status(500).send('Error creating user');
        }
    },

    // editPost Page
    updatePost: async (req, res) => {
        const postId = req.params.id;

        try {
            const [updatedRowsCount, updatedPost] = await Post.update(req.body, {
                where: { id: postId },
                returning: true
            });

            if (updatedRowsCount > 0) {
                res.json(updatedPost[0]);
            } else {
                res.status(404).send('Post not found');
            }
        } catch (error) {
            console.error(error);
            res.status(500).send('Error updating post');
        }
    },

    // editPost Page
    deletePost: async (req, res) => {
        const postId = req.params.id;

        try {
            const deletedRowCount = await Post.destroy({ where: { id: postId } });

            if (deletedRowCount > 0) {
                res.sendStatus(204);
            } else {
                res.status(404).send('User not found');
            }
        } catch (error) {
            console.error(error);
            res.status(500).send('Error deleting user');
        }
    }
};

module.exports = PostController;