const express = require('express');
const router = express.Router();

const userRoutes = require('./userRoutes');

// Base route
router.get('/', (req, res) => {
    res.json({
        success: true,
        message: 'Welcome to the Aquarium Fish API!',
    });
});

// User routes
router.use('/users', userRoutes);

module.exports = router;
