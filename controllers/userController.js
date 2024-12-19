const db = require('../config/db');

    // Get all users
    const getUsers = async (req, res) => {
      try {
        const result = await db.query('SELECT * FROM users');
        res.status(200).json(result.rows);
      } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Database query failed' });
      }
    };

    // Add a new user
    const addUser = async (req, res) => {
      const { name, email } = req.body;

      if (!name || !email) {
        return res.status(400).json({ error: 'Name and email are required' });
      }

      try {
        const result = await db.query(
          'INSERT INTO users (name, email) VALUES ($1, $2) RETURNING *',
          [name, email]
        );
        res.status(201).json(result.rows[0]);
      } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to add user' });
      }
    };

    module.exports = { getUsers, addUser };
