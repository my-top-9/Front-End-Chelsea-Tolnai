import { LOG_IN , LOG_OUT } from '../actions';

const initialState = {
  isLoggedIn: false,
  user: {},
  error: null
 }

function reducer (state = initialState , action) {
  switch(action.type) {
    case LOG_IN: 
        return {
            isLoggedIn: true,
            user: action.payload,
            error: null
        }
    case LOG_OUT: 
        return {
            isLoggedIn: false,
            user: {},
            error: null
        }
    default:
      return state;
  }
}

export default reducer;