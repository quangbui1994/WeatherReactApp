const config = require('./utility/config');
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const City = require('./models/city');
const enforce = require('express-sslify');

mongoose.connect(config.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('MONGO_DB connected');
    })
    .catch(error => {
        console.log(error.message);
    });

const app = express();

if (process.env.NODE_ENV === 'production') {
    app.use(enforce.HTTPS({ trustProtoHeader: true }));
}

// app.use(express.static(__dirname + '/'));
// if (process.env.NODE_ENV === 'production') {
//     app.use(express.static(path.join(__dirname, 'build')));
//     // app.get('*', (req, res) => {
//     //   res.sendFile(path.join(__dirname, 'build', 'index.html'));
//     // });
//     app.get('*', (req,res) => {
//         res.sendFile(path.join(__dirname, '/build/index.html'));
//     });
// }
app.use(express.static('build'));
app.get('*', (req,res) =>{
    res.sendFile(path.join(__dirname, 'build/index.html'));
});
app.use(bodyParser.json());

app.post('/api/cities', (req, res, next) => {
    const body = req.body;
    console.log(body);
    const city = new City ({
        cityName: body.cityName,
        temp: body.temp,
        tempMin: body.tempMin,
        tempMax: body.tempMax,
        humidity: body.humidity,
        windSpeed: body.windSpeed,
        windDeg: body.windDeg,
        description: body.description
    });
    
    city.save()
        .then(savedCity => {
            res.json(savedCity.toJSON());
        })
        .catch(error => next(error));
});

const PORT = config.PORT;
app.listen(PORT, () => {
    console.log(`The app is running on port ${PORT}`);
});