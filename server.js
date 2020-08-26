require('dotenv').config();
const config = require('./utility/config');
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cityRouter = require('./routes/city');

mongoose.connect(config.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('MONGO_DB connected');
    })
    .catch(error => {
        console.log(error.message);
    });

const app = express();

app.use(bodyParser.json());
app.use(express.static('build'));
app.use(cityRouter);

app.get('*', (req,res) =>{
    res.sendFile(path.join(__dirname, 'build/index.html'));
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`The app is running on port ${PORT}`);
});