export const LOG_IN = "LOG_IN";
export const LOG_OUT = "LOG_OUT";

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