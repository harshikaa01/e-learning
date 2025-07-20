const express = require('express');
const router = express.Router();
const User = require('../models/User');
const bcrypt = require('bcryptjs');

router.post('/register', async (req, res) => {
    const { name, email, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    try {
        const user = await User.create({ name, email, password: hashedPassword });
        res.status(201).json(user);
    } catch (err) {
        res.status(400).json({ error: 'User already exists' });
    }
});

router.post('/login', async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) return res.status(404).json({ error: 'User not found' });
    const isMatch = await bcrypt.compare(password, user.password);
    isMatch ? res.json(user) : res.status(401).json({ error: 'Invalid credentials' });
});

module.exports = router;