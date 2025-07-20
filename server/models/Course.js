// server/models/Course.js
const mongoose = require('mongoose');

const CourseSchema = new mongoose.Schema({
    title: String,
    description: String,
    enrolledUsers: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }]
});

module.exports = mongoose.model('Course', CourseSchema);
