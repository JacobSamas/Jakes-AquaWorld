const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const validateRequest = require('../middleware/validateRequest');
const { userRegistrationSchema, userLoginSchema } = require('../utils/validations');

// User routes
router.post('/register', validateRequest(userRegistrationSchema), userController.registerUser); // Validate and register
router.post('/login', validateRequest(userLoginSchema), userController.loginUser);             // Validate and login

module.exports = router;
