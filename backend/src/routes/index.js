const express = require('express');
const router = express.Router();

const userRoutes = require('./userRoutes');
const fishRoutes = require('./fishRoutes');

// Base route
router.get('/', (req, res) => {
    res.json({
        success: true,
        message: 'Welcome to the Aquarium Fish API!',
    });
});

// User routes
router.use('/users', userRoutes);

// Fish routes
router.use('/fish', fishRoutes);

module.exports = router;
