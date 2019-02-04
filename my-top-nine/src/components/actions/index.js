export const SIGN_UP = "SIGN_UP";
export const LOG_IN = "LOG_IN";
export const LOG_OUT = "LOG_OUT";

export const signup = user => {
    return {
      type: SIGN_UP,
      payload: user
    }
}

export const login = user => {
    return {
      type: LOG_IN,
      payload: user
    }
}

export const logout = user => {
    return {
      type: LOG_OUT,
      payload: user
    }
}