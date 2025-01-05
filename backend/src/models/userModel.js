const pool = require('../config/db');

const UserModel = {
    getUserByEmail: async (email) => {
        const [rows] = await pool.query('SELECT * FROM users WHERE email = ?', [email]);
        return rows[0];
    },
    createUser: async (data) => {
        const { name, email, password } = data;
        const [result] = await pool.query(
            'INSERT INTO users (name, email, password) VALUES (?, ?, ?)',
            [name, email, password]
        );
        return result;
    },
};

module.exports = UserModel;
