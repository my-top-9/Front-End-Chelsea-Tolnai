import { 
    GETTING_USERS,
    GETTING_USERS_SUCCESSFUL,
    GETTING_USERS_FAILED,
    LOG_IN, 
    LOG_OUT,
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
    isLoggedIn: false,
    gettingUsers: false,
    registeredUsers: [],
    registeringUser: false,
    deletingUser: false,
    updatingUser: false,
    user: {},
    error: null
}

function reducer (state = initialState , action) {
  switch(action.type) {
    case GETTING_USERS:
        return {
            ...state,
            registeredUsers: [],
            gettingUsers: true,
            error: null,
        }
    case GETTING_USERS_SUCCESSFUL:
        return {
            ...state,
            registeredUsers: action.payload,
            gettingUsers: false,
            error: null,
        }
    case GETTING_USERS_FAILED:
        return {
            ...state,
            registeredUsers: [],
            gettingUsers: false,
            error: action.payload,
        }

    case REGISTERING_USER:
        return {
            ...state,
            registeringUser: true,
            error: null,
        }
    case REGISTERING_USER_SUCCESSFUL:
        return {
            ...state,
            user: action.paylod,
            registeringUser: false,
            error: null,
        }
    case REGISTERING_USER_FAILED:
        return {
            ...state,
            registeringUser: false,
            error: action.payload,
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

    case LOG_IN: 
        return {
            isLoggedIn: true,
            user: action.payload,
        }
    case LOG_OUT: 
        return {
            isLoggedIn: false,
            user: {},
        }
    default:
      return state;
  }
}

export default reducer;