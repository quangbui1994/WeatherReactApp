import * as actionTypes from './actionTypes';
// import axios from '../../axios-order';
import { apiCallOWM, apiCallFirebase } from '../../axios-order';
import keys from '../../config/keys';

export const fetchWeatherDataSuccess = data => {
    return {
        type: actionTypes.FETCH_WEATHER_DATA_SUCCESS,
        value: data
    }
}

export const fetchWeatherDataFail = err => {
    return {
        type: actionTypes.FETCH_WEATHER_DATA_FAIL,
        err: err
    }
}

export const fetchWeatherDataStart = err => {
    return {
        type: actionTypes.FETCH_WEATHER_DATA_START
    }
}

export const fetchWeatherData = (data) => {
    const city = data[0].city;
    const country = data[1].country;
    return dispatch => {
        dispatch(fetchWeatherDataStart());
        apiCallOWM.get(`weather?q=${city},${country}&appid=${keys.apiKeyOWM}&units=metric`)
            .then(res => {
                console.log(res.data);
                dispatch(fetchWeatherDataSuccess(res.data));
            })
            .catch(err => {
                dispatch(fetchWeatherDataFail(err));
                console.log(err);
            })
    }
}

export const setInitialDataSuccess = (res) => {
    return {
        type: actionTypes.SET_INITIAL_DATA_SUCCESS,
        res
    }
}

export const setInitialDataFail = err => {
    return {
        type: actionTypes.SET_INITIAL_DATA_FAIL,
        err
    }
}

export const setInitialDataStart = () => {
    return {
        type: actionTypes.SET_INITIAL_DATA_START
    }
}

export const setInitialData = () => {
    return dispatch => {
        dispatch(setInitialDataStart())
        apiCallFirebase.get('/city.json')
            .then(res => {
                dispatch(setInitialDataSuccess(res.data));
            })
            .catch(err => {
                dispatch(setInitialDataFail(err));
            });
    };
};