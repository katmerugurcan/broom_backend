const express = require('express');
    const dotenv = require('dotenv');
    const db = require('./config/db');

    dotenv.config();

    const app = express();
    const PORT = process.env.PORT || 3000;

    // Middleware
    app.use(express.json());

    // Routes
    const userRoutes = require('./routes/userRoutes');
    app.use('/api/users', userRoutes);

    // Start server
    app.listen(PORT, () => {
      console.log(`Server is running on http://localhost:${PORT}`);
    });
