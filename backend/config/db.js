const mongoose = require('mongoose');
const User = require('../models/User');

const seedUsers = async () => {
    await mongoose.connect('mongodb://localhost:27017/repo', { useNewUrlParser: true, useUnifiedTopology: true });
    
    const users = [];
    for (let i = 1; i <= 50; i++) {
        users.push({ username: `user${i}`, password: `password${i}` });
    }
    
    await User.insertMany(users);
    console.log('Database seeded with users');
    mongoose.connection.close();
};

seedUsers();