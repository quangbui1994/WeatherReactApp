import * as actionTypes from '../actions/actionTypes';
import { updatedObject } from '../../shared/utility';

const initialState = {
    token: null,
    localId: null,
    err: null,
    spinner: false
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.AUTH_HANDLER_START:
            return updatedObject(state, { spinner: true });
        case actionTypes.AUTH_HANDLER_SUCCESS:
            return updatedObject(state, { token: action.token, localId: action.localId, spinner: false });
        case actionTypes.AUTH_HANDLER_FAIL:
            return updatedObject(state, { err: action.err });
        case actionTypes.LOG_OUT_HANDLER:
            return updatedObject(state, { token: null, localId: null });
        default:
            return state;
    };
};

export default reducer;