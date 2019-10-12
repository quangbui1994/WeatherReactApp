import * as actionTypes from '../actions/actionTypes';
import axios from 'axios';
import keys from '../../config/keys';

export const authHandlerSuccess = (token, id) => {
    return {
        type: actionTypes.AUTH_HANDLER_SUCCESS,
        token,
        localId: id
    }
}

export const authHandlerFail = err => {
    return {
        type: actionTypes.AUTH_HANDLER_FAIL,
        err: err
    }
}

export const authHandlerStart = () => {
    return {
        type: actionTypes.AUTH_HANDLER_FAIL
    }
}

export const authHandler = (email, password, goSignup) => {
    let authData = {
        email,
        password,
        returnSecureToken: true
    }
    let URL = `https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=${keys.FirebaseAuth.apiKey}`;
    if (!goSignup) {
        URL = `https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=${keys.FirebaseAuth.apiKey}`;
    }

    return dispatch => {
        dispatch(authHandlerStart());
        axios.post(URL, authData)
            .then(res => {
                console.log(res);
                sessionStorage.setItem('token', res.data.idToken);
                sessionStorage.setItem('localId', res.data.localId);
                dispatch(authHandlerSuccess(res.data.idToken, res.data.localId));
            })
            .catch(err =>  {
                console.log(err);
                dispatch(authHandlerFail(err.response.data.error.message));
            })
    }
}

export const logoutHandler = () => {
    sessionStorage.removeItem('token');
    sessionStorage.removeItem('localId');
    return {
        type: actionTypes.LOG_OUT_HANDLER
    }
}