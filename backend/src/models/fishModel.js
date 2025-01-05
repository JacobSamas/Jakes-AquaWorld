const pool = require('../config/db');

const FishModel = {
    getAllFish: async () => {
        const [rows] = await pool.query('SELECT * FROM fish');
        return rows;
    },
    getFishById: async (id) => {
        const [rows] = await pool.query('SELECT * FROM fish WHERE id = ?', [id]);
        return rows[0];
    },
    createFish: async (data) => {
        const { name, species, price, description } = data;
        const [result] = await pool.query(
            'INSERT INTO fish (name, species, price, description) VALUES (?, ?, ?, ?)',
            [name, species, price, description]
        );
        return result;
    },
    updateFish: async (id, data) => {
        const { name, species, price, description } = data;
        const [result] = await pool.query(
            'UPDATE fish SET name = ?, species = ?, price = ?, description = ? WHERE id = ?',
            [name, species, price, description, id]
        );
        return result;
    },
    deleteFish: async (id) => {
        const [result] = await pool.query('DELETE FROM fish WHERE id = ?', [id]);
        return result;
    },
};

module.exports = FishModel;
