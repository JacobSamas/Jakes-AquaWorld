const express = require('express');
const router = express.Router();
const fishController = require('../controllers/fishController');
const authMiddleware = require('../middleware/authMiddleware');
const validateRequest = require('../middleware/validateRequest');
const { fishSchema } = require('../utils/validations');

// Fish routes
router.get('/', fishController.getAllFish);              // Public route
router.get('/:id', fishController.getFishById);         // Public route
router.post('/', authMiddleware, validateRequest(fishSchema), fishController.createFish); // Auth required
router.put('/:id', authMiddleware, validateRequest(fishSchema), fishController.updateFish); // Auth required
router.delete('/:id', authMiddleware, fishController.deleteFish); // Auth required

module.exports = router;
