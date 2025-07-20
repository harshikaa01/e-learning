const express = require('express');
const router = express.Router();
const Course = require('../models/Course');

router.get('/', async (req, res) => {
    try {
        const courses = await Course.find();
        res.json(courses);
    } catch (err) {
        res.status(500).json({ error: 'Failed to fetch courses' });
    }
});

router.get('/enrolled/:userId', async (req, res) => {
    try {
        const { userId } = req.params;
        const courses = await Course.find({ enrolledUsers: userId });
        res.json(courses);
    } catch (err) {
        res.status(500).json({ error: 'Failed to fetch enrolled courses' });
    }
});

router.post('/enroll', async (req, res) => {
    const { userId, courseId } = req.body;
    try {
        const course = await Course.findById(courseId);
        if (!course) return res.status(404).json({ error: 'Course not found' });

        if (!course.enrolledUsers.includes(userId)) {
            course.enrolledUsers.push(userId);
            await course.save();
        }
        res.json({ message: 'Enrolled successfully' });
    } catch (err) {
        res.status(500).json({ error: 'Enrollment failed' });
    }
});

module.exports = router;
