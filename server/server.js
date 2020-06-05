const express = require('express');

require('dotenv').config({path: '../.env'});

const app = express();

const createPollRoute = require('./routes/createPoll');

const getPollRoute = require('./routes/getPoll');

// CORS
// Middleware To Set Headers
// https://stackoverflow.com/questions/23751914/how-can-i-set-response-header-on-express-js-assets
app.use((req, res, next) => {
    res.append("Access-Control-Allow-Origin", ["*"]);
    res.append("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
    res.append("Access-Control-Allow-Headers", "Content-Type");
    next();
});

app.use('/api/getPoll', getPollRoute);

app.use('/api/createPoll', createPollRoute);

app.listen(process.env.SERVER_PORT, () => {
    console.log(`Server Running On Port ${process.env.SERVER_PORT}!`);
});