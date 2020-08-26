const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const City = mongoose.model('City');

router.post('/api/cities', (req, res, next) => {
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

module.exports = router;