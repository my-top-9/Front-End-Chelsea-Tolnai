import { 
    GETTING_USERS,
    GETTING_USERS_SUCCESSFUL,
    GETTING_USERS_FAILED,
    LOG_IN, 
    LOG_OUT,
    REGISTERING_USER,
    REGISTERING_USER_SUCCESSFUL,
    REGISTERING_USER_FAILED,
} from '../actions';

const initialState = {
  isLoggedIn: false,
  gettingUsers: false,
  registeredUsers: [],
  registeringUser: false,
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