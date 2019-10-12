import * as actionTypes from '../actions/actionTypes';
import { updatedObject } from '../../shared/utility';

const initialState = {
    idList: [],
    listCity: [],
    spinner: false
}

const reducer = (state = initialState, action) => {
    const addCity = (state, action) => {
        let idList = Object.values(action.IDs).map(el => el.id);
        return updatedObject(state, { idList });
    }

    const removeCity = (state, action) => {
        console.log(action.id);
        let updatedListCity = state.listCity.filter(el => {
            return el.id !== action.id;
        })

        console.log(updatedListCity);
        return updatedObject(state, {listCity: updatedListCity});
    }

    switch (action.type) {
        case actionTypes.FETCH_DATA_TO_REDUX_SUCCESS:
            return addCity(state, action);
        case actionTypes.GET_CITY_DATA_START:
            return updatedObject(state, {spinner: true});
        case actionTypes.GET_CITY_DATA_SUCCESS:
            return updatedObject(state, {listCity: action.listCity, spinner: false});
        case actionTypes.REMOVE_CITY_DATA:
            return removeCity(state, action);
        case actionTypes.LOG_OUT_HANDLER:
            return updatedObject(state, {idList: [], listCity: []});
        default:
            return state;
    }
}

export default reducer;