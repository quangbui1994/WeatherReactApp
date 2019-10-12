import * as actionTypes from './actionTypes';
import { apiCallFirebase } from '../../axios-order';
import keys from '../../config/keys';

export const fetchDataToReduxSuccess = IDs => {
    return {
        type: actionTypes.FETCH_DATA_TO_REDUX_SUCCESS,
        IDs
    }
}

export const fetchDataToReduxFail = err => {
    return {
        type: actionTypes.FETCH_DATA_TO_REDUX_FAIL,
        err
    }
}

export const saveDataHandler = (id, localId) => {
    const token = sessionStorage.getItem('token');
    console.log(localId);
    const userData = {
        localId, 
        id
    }
    return dispatch => {
        apiCallFirebase.post('/user.json?auth=' + token, userData)
            .then(res => {
                dispatch(fetchDataToRedux(token, localId)) 
            });
    };
};

export const fetchDataToRedux = (token, localId) => {
    const queryParams = '?auth=' + token + '&orderBy="localId"&equalTo="' + localId + '"';
    return dispatch => {
        apiCallFirebase.get('/user.json' + queryParams)
            .then(res => {
                console.log(res);
                dispatch(fetchDataToReduxSuccess(res.data));
            })
            .catch(err => {
                dispatch(fetchDataToReduxFail(err));
            });
    }
}

export const getCityDataSuccess = res => {
    return {
        type: actionTypes.GET_CITY_DATA_SUCCESS,
        listCity: res.data.list
    };
};

export const getCityDataFail = err => {
    return {
        type: actionTypes.GET_CITY_DATA_FAIL,
        err
    };
};

export const getCityDataStart = () => {
    return {
        type: actionTypes.GET_CITY_DATA_START
    };
};

export const getCityData = id => {
    const idArr = id.join(',');
    console.log(idArr);
    const URL = `http://api.openweathermap.org/data/2.5/group?id=${idArr}&units=metric&appid=${keys.apiKeyOWM}`;
    return dispatch => {
        dispatch(getCityDataStart());
        apiCallFirebase.get(URL)
            .then(res => {
                console.log(res);
                dispatch(getCityDataSuccess(res));
            })
            .catch(err => {
                dispatch(getCityDataFail(err));
            })
    };
};

export const removeCityData = (id) => {
    return {
        type: actionTypes.REMOVE_CITY_DATA,
        id
    }
}