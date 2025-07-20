const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
require('dotenv').config();

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI);

app.use('/api/auth', require('./routes/auth'));
app.use('/api/courses', require('./routes/course'));

app.listen(5000, () => console.log('Server running on 5000'));