const express = require('express');
const app = express();
// const passport = require('passport');

const routes = require('./routes');
require('dotenv').config;
require('./config').dbConnect;

// const initializePassport = require('./middlewares/passportAuth');
// initializePassport(passport);

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// app.use(session({
//     secret: process.env.SESSION_SECRET,
//     resave: false,
//     saveUninitialized: false
// }))
// app.use(passport.initialize());
// app.use(passport.session());

app.use('/api', routes)
const port = process.env.PORT;
app.listen(port, (err) => {
    if (err) {
        console.log(`${err} error while starting the server`);
    } else {
        console.log(`server running on http://localhost:${port}`);
    }
})