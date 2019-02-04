import { 
    LOG_IN, 
    LOG_OUT,
    SIGN_UP,
} from '../actions';

const initialState = {
  isLoggedIn: false,
  user: {},
  error: null
}

function reducer (state = initialState , action) {
  switch(action.type) {
    case SIGN_UP: 
        return {
            isLoggedIn: true,
            user: action.payload,
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