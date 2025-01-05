const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// User routes
router.post('/register', userController.registerUser); // Register a new user
router.post('/login', userController.loginUser);       // Login a user
router.get('/:id', userController.getUserById);        // Get user by ID

module.exports = router;
