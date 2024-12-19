const express = require('express');
    const { getUsers, addUser } = require('../controllers/userController');

    const router = express.Router();

    // Get all users
    router.get('/', getUsers);

    // Add a new user
    router.post('/', addUser);

    module.exports = router;
