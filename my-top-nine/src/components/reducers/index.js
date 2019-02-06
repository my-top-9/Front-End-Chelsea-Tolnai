import { 
    LOGGING_IN,
    LOGGING_IN_SUCCESSFUL,
    LOGGING_IN_FAILED, 

    LOGGING_OUT,
    LOGGING_OUT_SUCCESSFUL,
    LOGGING_OUT_FAILED,

    REGISTERING_USER,
    REGISTERING_USER_SUCCESSFUL,
    REGISTERING_USER_FAILED,

    DELETING_USER,
    DELETING_USER_SUCCESSFUL,
    DELETING_USER_FAILED,

    UPDATING_USER,
    UPDATING_USER_SUCCESSFUL,
    UPDATING_USER_FAILED,

} from '../actions';

const initialState = {

    loggingInUser: false,
    isLoggedIn: localStorage.getItem('isLoggedIn'),
    loggingOutUser: false,

    registeringUser: false,
    deletingUser: false,
    updatingUser: false,

    user: {},
    username: localStorage.getItem('username'),

    loginError: null,
    signupError: null,
    error: null
}

function reducer (state = initialState , action) {
  switch(action.type) {

    case REGISTERING_USER:
        return {
            ...state,
            registeringUser: true,
            loginError: null,
            signupError: null,
        }
    case REGISTERING_USER_SUCCESSFUL:
        return {
            ...state,
            user: action.payload,
            registeringUser: false,
            loginError: null,
            signupError: null,
        }
    case REGISTERING_USER_FAILED:
        return {
            ...state,
            registeringUser: false,
            loginError: null,
            signupError: action.payload,
        }

    case DELETING_USER:
        return {
            ...state,
            deletingUser: true,
            error: null,
        }
    case DELETING_USER_SUCCESSFUL:
        return {
            ...state,
            user: action.payload,
            deletingUser: false,
            error: null,
        }

    case DELETING_USER_FAILED:
        return {
            ...state,
            deletingUser: false,
            error: action.payload,
        }

    case UPDATING_USER:
        return {
            ...state,
            updatingUser: true,
            error: null,
        }
    case UPDATING_USER_SUCCESSFUL:
        return {
            ...state,
            user: action.payload,
            updatingUser: false,
            error: null,
        }
    case UPDATING_USER_FAILED:
        return {
            ...state,
            updatingUser: false,
            error: action.payload,
        }

    case LOGGING_IN: 
        return {
            ...state,
            loggingInUser: true,
            isLoggedIn: false,
            loginError: null,
            signupError: null,
        }
    case LOGGING_IN_SUCCESSFUL: 
        return {
            ...state,
            loggingInUser: false,
            isLoggedIn: true,
            user: action.payload,
            username: localStorage.getItem('username'),
            signupError: null,
        }
    case LOGGING_IN_FAILED: 
        return {
            ...state,
            loggingInUser: false,
            isLoggedIn: false,
            loginError: action.payload,
            signupError: null,
        }

    case LOGGING_OUT: 
        return {
            ...state,
            loggingOutUser: true,
            isLoggedIn: true,
            error: null,
        }
    case LOGGING_OUT_SUCCESSFUL: 
        return {
            ...state,
            loggingOutUser: false,
            isLoggedIn: false,
            user: {},
            error: null,
        }
    case LOGGING_OUT_FAILED: 
        return {
            ...state,
            loggingOutUser: false,
            isLoggedIn: true,
            error: action.payload,
        }

        
    default:
      return state;
  }
}

export default reducer;