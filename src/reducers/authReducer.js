import * as actionTypes from "../constants/actionTypes";
import {
    updateObject
  } from './utility';

const initialState = {
    token: null,
    userId: null,
    error: null,
    loading: false,
    isSignUp: null
}

const authStart = (state) => {
    return updateObject(state, {
        error: null, 
        loading: true
    });
}

const authSuccess = (state, action) => {
    return updateObject(state, {
        token: action.idToken,
        userId: action.userId,
        error: null,
        loading: false
    });
}

const getUserName = (state, action) => {
    return updateObject(state, {
        name: action.name
    });
}

const authFail = (state, action) => {
    return updateObject(state, {
        error: action.error, 
        loading: false
    });
}

const authLogout = (state) => {
    return updateObject(state, {
        token: null,
        userId: null,
        isSignUp: null
    });
}

const authReducer = (state = initialState, action) => {
    switch(action.type){
        case actionTypes.AUTH_START:
            return authStart(state, action);
        case actionTypes.AUTH_SUCCESS:
            return authSuccess(state, action);
        case actionTypes.GET_USER_NAME:
            return getUserName(state, action);
        case actionTypes.AUTH_FAIL:
            return authFail(state, action);
        case actionTypes.AUTH_LOGOUT:
            return authLogout(state);
        case actionTypes.SIGN_UP_FORM:
            return updateObject(state, {isSignUp: action.option});
        default: 
            return state;
    }
}

export default  authReducer;
