const FishModel = require('../models/fishModel');

const fishController = {
    // Get all fish
    getAllFish: async (req, res) => {
        try {
            const fish = await FishModel.getAllFish();
            res.status(200).json({ success: true, fish });
        } catch (error) {
            console.error(error);
            res.status(500).json({ success: false, message: 'Internal server error.' });
        }
    },

    // Get fish by ID
    getFishById: async (req, res) => {
        try {
            const { id } = req.params;
            const fish = await FishModel.getFishById(id);

            if (!fish) {
                return res.status(404).json({ success: false, message: 'Fish not found.' });
            }

            res.status(200).json({ success: true, fish });
        } catch (error) {
            console.error(error);
            res.status(500).json({ success: false, message: 'Internal server error.' });
        }
    },

    // Create a new fish
    createFish: async (req, res) => {
        try {
            const { name, species, price, description } = req.body;

            // Validate input
            if (!name || !species || !price) {
                return res.status(400).json({ success: false, message: 'Name, species, and price are required.' });
            }

            const result = await FishModel.createFish({ name, species, price, description });
            res.status(201).json({ success: true, message: 'Fish added successfully.', fishId: result.insertId });
        } catch (error) {
            console.error(error);
            res.status(500).json({ success: false, message: 'Internal server error.' });
        }
    },

    // Update fish details
    updateFish: async (req, res) => {
        try {
            const { id } = req.params;
            const { name, species, price, description } = req.body;

            // Validate input
            if (!name || !species || !price) {
                return res.status(400).json({ success: false, message: 'Name, species, and price are required.' });
            }

            const result = await FishModel.updateFish(id, { name, species, price, description });

            if (result.affectedRows === 0) {
                return res.status(404).json({ success: false, message: 'Fish not found.' });
            }

            res.status(200).json({ success: true, message: 'Fish updated successfully.' });
        } catch (error) {
            console.error(error);
            res.status(500).json({ success: false, message: 'Internal server error.' });
        }
    },

    // Delete a fish
    deleteFish: async (req, res) => {
        try {
            const { id } = req.params;

            const result = await FishModel.deleteFish(id);

            if (result.affectedRows === 0) {
                return res.status(404).json({ success: false, message: 'Fish not found.' });
            }

            res.status(200).json({ success: true, message: 'Fish deleted successfully.' });
        } catch (error) {
            console.error(error);
            res.status(500).json({ success: false, message: 'Internal server error.' });
        }
    },
};

module.exports = fishController;
