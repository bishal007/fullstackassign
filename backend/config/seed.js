// backend/config/seed.js
const mongoose = require('mongoose');
const User = require('../models/User');

const seedUsers = async () => {
    await mongoose.connect('mongodb://localhost:27017/myapp'); // Connect to the database
    
    const users = [];
    for (let i = 1; i <= 500; i++) {
        users.push({ username: `user${i}`, password: `password${i}` });
    }
    
    await User.deleteMany({}); // Clear existing users
    await User.insertMany(users); // Insert new users
    console.log('Database seeded with users');
    mongoose.connection.close(); // Close the connection
};

seedUsers().catch(err => console.error(err));