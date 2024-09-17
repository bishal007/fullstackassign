const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors'); // Import cors
const authRoutes = require('./routes/auth');
const app = express();

app.use(cors()); // Enable CORS
app.use(express.json());
app.use('/api/auth', authRoutes); // Ensure this line is present

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/repo')
    .then(() => app.listen(5000, () => console.log('Server running on port 5000')))
    .catch(err => console.error('Database connection error:', err));