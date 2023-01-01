const express = require("express");
require("dotenv").config();
const mongoose = require('mongoose');
const workoutRoutes = require("./routes/workouts");
const userRoutes = require('./routes/user');
const cors = require('cors');

//  create express app
const app = express();


// middlewares
app.use(cors());
app.use(express.json());
// set up a global middleware to log all requests coming in
app.use((req, res, next) => {
    console.log(req.path, req.method);
    next();
})

// routes for the app
app.use('/api/workouts', workoutRoutes);
app.use('/api/user', userRoutes);

// connect to database
mongoose.set('strictQuery', false);
mongoose.connect(process.env.MONGODB_URI)
.then(() => {
    // listen for requests
    app.listen(process.env.PORT || 5000, () => {
    console.log(`Connected successfully to the database and listening on port ${process.env.PORT}`);
})
})
.catch((error) => {
    console.log(error);
})
