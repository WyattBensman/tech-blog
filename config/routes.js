const express = require('express');
const router = express.Router();

const UserController = require('../controllers/userController');
const PostController = require('../controllers/postController');
const DestinationController = require('../controllers/destinationController');

// User Routes
router.post('/api/users', UserController.createUser);
router.post('/api/users/login', UserController.login);
router.post('/api/users/logout', UserController.logout);

// Post Routes
router.post('api/post/create', PostController.createPost);
router.post('api/post/update', PostController.updatePost);
router.post('api/post/delete', PostController.deletePost);

// Destination Routes
router.get('/', DestinationController.renderHome); // GOOD
router.get('/dashboard', DestinationController.renderDashboard); // GOOD
router.get('/create-post', DestinationController.renderCreatePost); // GOOD
router.get('/edit-post', DestinationController.renderEditPost);
router.get('/login', DestinationController.renderLogin); // GOOD
router.get('/signup', DestinationController.renderSignup); // GOOD

module.exports = router;