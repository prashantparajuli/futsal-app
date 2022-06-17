const express = require('express');
const app = express();
const routes = require('./routes');
require('dotenv').config;
require('./config').dbConnect;

app.use(express.json());

app.use('/api', routes)
const port = process.env.PORT;
app.listen(port, (err) => {
    if (err) {
        console.log(`${err} error while starting the server`);
    } else {
        console.log(`server running on http://localhost:${port}`);
    }
})