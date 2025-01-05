const UserModel = require('../models/userModel');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const userController = {
    // Register a new user
    registerUser: async (req, res) => {
        try {
            const { name, email, password } = req.body;

            // Validate input
            if (!name || !email || !password) {
                return res.status(400).json({ success: false, message: 'All fields are required.' });
            }

            // Check if user already exists
            const existingUser = await UserModel.getUserByEmail(email);
            if (existingUser) {
                return res.status(400).json({ success: false, message: 'User already exists.' });
            }

            // Hash the password
            const hashedPassword = await bcrypt.hash(password, 10);

            // Save the user to the database
            const result = await UserModel.createUser({ name, email, password: hashedPassword });
            res.status(201).json({ success: true, message: 'User registered successfully.', userId: result.insertId });
        } catch (error) {
            console.error(error);
            res.status(500).json({ success: false, message: 'Internal server error.' });
        }
    },

    // Login a user
    loginUser: async (req, res) => {
        try {
            const { email, password } = req.body;

            // Validate input
            if (!email || !password) {
                return res.status(400).json({ success: false, message: 'Email and password are required.' });
            }

            // Check if user exists
            const user = await UserModel.getUserByEmail(email);
            if (!user) {
                return res.status(400).json({ success: false, message: 'Invalid email or password.' });
            }

            // Compare password
            const isPasswordMatch = await bcrypt.compare(password, user.password);
            if (!isPasswordMatch) {
                return res.status(400).json({ success: false, message: 'Invalid email or password.' });
            }

            // Generate JWT token
            const token = jwt.sign({ userId: user.id, email: user.email }, process.env.JWT_SECRET, { expiresIn: '1h' });

            res.status(200).json({ success: true, message: 'Login successful.', token });
        } catch (error) {
            console.error(error);
            res.status(500).json({ success: false, message: 'Internal server error.' });
        }
    },

    // Get user by ID
    getUserById: async (req, res) => {
        try {
            const { id } = req.params;

            // Fetch user by ID
            const user = await UserModel.getUserById(id);
            if (!user) {
                return res.status(404).json({ success: false, message: 'User not found.' });
            }

            res.status(200).json({ success: true, user });
        } catch (error) {
            console.error(error);
            res.status(500).json({ success: false, message: 'Internal server error.' });
        }
    },
};

module.exports = userController;
