import * as actionTypes from '../actions/actionTypes';
import { updatedObject } from '../../shared/utility';

const initialState = {
    city: null,
    spinner: false
};

const getWeatherData = (state, actions) => {
    let city = updatedObject(state.city, {
        id: actions.value.id, 
        name: actions.value.name, 
        temp: actions.value.main.temp, 
        tempMin: actions.value.main.temp_min,
        tempMax: actions.value.main.temp_max,
        humidity: actions.value.main.humidity,
        wind: actions.value.wind,
        weather: actions.value.weather});
    return updatedObject(state, { city, spinner: false });
}

const reducer = (state = initialState, actions) => {
    switch (actions.type) {
        case actionTypes.FETCH_WEATHER_DATA_START:
            return updatedObject(state, { spinner: true });
        case actionTypes.FETCH_WEATHER_DATA_SUCCESS:
            return getWeatherData(state, actions);
        case actionTypes.SET_INITIAL_DATA_SUCCESS:
            return updatedObject(state, { city: actions.res, spinner: false });
        case actionTypes.SET_INITIAL_DATA_START:
            return updatedObject(state, { spinner: true });
        default:
            return state;
    }
}

export default reducer;