const express = require('express');
const router = express.Router();

const UserController = require('../controllers/userController');
const PostController = require('../controllers/postController');

// API Routes
// Create User
router.post('/api/users', UserController.createUser);
router.post('/api/users/login', UserController.login);
router.post('/api/users/logout', UserController.logout);


module.exports = router;












// Post Controller Routes
router.get('/', PostController.getPost);

// Create Post Routes
router.get('/createPost', PostController.showCreatePostForm);
router.post('/createPost', PostController.createPost);

// Edit Post Routes
router.get