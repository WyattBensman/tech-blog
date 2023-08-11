const express = require('express');
const router = express.Router();

const UserController = require('../controllers/userController');
const PostController = require('../controllers/postController');

// User Routes
router.post('/api/users', UserController.createUser);
router.post('/api/users/login', UserController.login);
router.post('/api/users/logout', UserController.logout);

// Post Routes
router.post('api/post/create', PostController.createPost);
router.post('api/post/update', PostController.updatePost);
router.post('api/post/delete', PostController.deletePost);



// Destination Routes


module.exports = router;












// Post Controller Routes
router.get('/', PostController.getPost);

// Create Post Routes
router.get('/createPost', PostController.showCreatePostForm);
router.post('/createPost', PostController.createPost);

// Edit Post Routes
router.get