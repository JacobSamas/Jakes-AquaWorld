const pool = require('../config/db');

const UserModel = {
    // Get a user by their email
    getUserByEmail: async (email) => {
        const [rows] = await pool.query('SELECT * FROM users WHERE email = ?', [email]);
        return rows[0];
    },

    // Get a user by their ID
    getUserById: async (id) => {
        const [rows] = await pool.query('SELECT * FROM users WHERE id = ?', [id]);
        return rows[0];
    },

    // Create a new user
    createUser: async (data) => {
        const { name, email, password } = data;
        const [result] = await pool.query(
            'INSERT INTO users (name, email, password) VALUES (?, ?, ?)',
            [name, email, password]
        );
        return result;
    },

    // Update user details
    updateUser: async (id, data) => {
        const { name, email, password } = data;
        const [result] = await pool.query(
            'UPDATE users SET name = ?, email = ?, password = ? WHERE id = ?',
            [name, email, password, id]
        );
        return result;
    },

    // Delete a user by their ID
    deleteUser: async (id) => {
        const [result] = await pool.query('DELETE FROM users WHERE id = ?', [id]);
        return result;
    },

    // Get all users (Optional for admin functionality)
    getAllUsers: async () => {
        const [rows] = await pool.query('SELECT * FROM users');
        return rows;
    },
};

module.exports = UserModel;
