require('dotenv/config');

const mongoose = require('mongoose');

const dbConnect = mongoose.connect(process.env.DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log('database connected successfully');
}).catch((err) => {
    console.log(`${err} error connectiong to database`);
})

module.exports = dbConnect;