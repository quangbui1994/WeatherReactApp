import axios from 'axios';

export const apiCallFirebase = axios.create({
        baseURL: 'https://profound-outlet-241613.firebaseio.com'
        // headers: {
        //     'Access-Control-Allow-Origin': '*',
        //     'Content-Type': 'application/json'
        // }
    })

export const apiCallOWM = axios.create({
    baseURL: 'http://api.openweathermap.org/data/2.5'
})