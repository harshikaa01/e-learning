const mongoose = require('mongoose');
const Course = require('./models/Course');
require('dotenv').config();

mongoose.connect(process.env.MONGO_URI);

const seed = async () => {
    await Course.deleteMany();
    await Course.insertMany([
        { title: 'React for Beginners', description: 'Learn the basics of React.js with practical examples.' },
        { title: 'Node.js Crash Course', description: 'Understand server-side JavaScript using Node.js.' },
        { title: 'MongoDB Mastery', description: 'Master MongoDB and Mongoose in full-stack apps.' },
        { title: 'HTML & CSS Fundamentals', description: 'Start designing beautiful websites from scratch.' },
        { title: 'Express.js Essentials', description: 'Build powerful APIs with Express framework.' },
        { title: 'JavaScript Deep Dive', description: 'Learn ES6+, closures, promises and more.' },
    ]);
    console.log('Courses seeded');
    mongoose.disconnect();
};

seed();
