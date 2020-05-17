require('dotenv').config();

const PORT = process.env.PORT || 3001;
// const MONGO_URI = process.env.MONGO_URI;
const MONGO_URI = 'mongodb+srv://QuangBui:Password@cluster0-ckcxz.mongodb.net/test';

module.exports = {
    PORT,
    MONGO_URI
}