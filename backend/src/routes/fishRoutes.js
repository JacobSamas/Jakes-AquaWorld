const express = require('express');
const router = express.Router();
const fishController = require('../controllers/fishController');

// Fish routes
router.get('/', fishController.getAllFish);           // Get all fish
router.get('/:id', fishController.getFishById);      // Get fish by ID
router.post('/', fishController.createFish);         // Add a new fish
router.put('/:id', fishController.updateFish);       // Update fish details
router.delete('/:id', fishController.deleteFish);    // Delete a fish

module.exports = router;
