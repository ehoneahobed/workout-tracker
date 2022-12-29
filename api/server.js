const express = require("express");
require("dotenv").config();
const mongoose = require('mongoose');
const workoutRoutes = require("./routes/workouts");

//  create express app
const app = express();


// middlewares
app.use(express.json());
// set up a global middleware to log all requests coming in
app.use((req, res, next) => {
    console.log(req.path, req.method);
    next();
})

// routes for the app
app.use('/api/workouts', workoutRoutes);

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
