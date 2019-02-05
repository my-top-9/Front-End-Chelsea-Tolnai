import axios from 'axios';

export const REGISTERING_USER = "REGISTERING_USER";
export const REGISTERING_USER_SUCCESSFUL = "REGISTERING_USER_SUCCESSFUL";
export const REGISTERING_USER_FAILED = "REGISTERING_USER_FAILED";

export const LOGGING_IN = "LOGGING_IN";
export const LOGGING_IN_SUCCESSFUL = "LOGGING_IN_SUCCESSFUL";
export const LOGGING_IN_FAILED = "LOGGING_IN_FAILED";

export const LOGGING_OUT = "LOGGING_OUT";
export const LOGGING_OUT_SUCCESSFUL = "LOGGING_OUT_SUCCESSFUL";
export const LOGGING_OUT_FAILED = "LOGGING_OUT_FAILED";

export const DELETING_USER = "DELETING_USER";
export const DELETING_USER_SUCCESSFUL = "DELETING_USER_SUCCESSFUL";
export const DELETING_USER_FAILED = "DELETING_USER_FAILED";

export const UPDATING_USER = "UPDATING_USER";
export const UPDATING_USER_SUCCESSFUL = "UPDATING_USER_SUCCESSFUL";
export const UPDATING_USER_FAILED = "UPDATING_USER_FAILED";

export const signup = user => dispatch => {
    dispatch({ type: REGISTERING_USER });
    axios
        .post("http://localhost:5000/api/register", user)
        .then(res => dispatch({ type: REGISTERING_USER_SUCCESSFUL, payload: user }))
        .catch(err => dispatch({ type: REGISTERING_USER_FAILED, payload: err }));
};

export const login = user => dispatch => {
    dispatch({ type: LOGGING_IN });
    axios
        .post("http://localhost:5000/api/login", user)
        .then(res => {
            localStorage.setItem('isLoggedIn', true);
            dispatch({ type: LOGGING_IN_SUCCESSFUL, payload: user })
        })
        .catch(err => dispatch({ type: LOGGING_IN_FAILED, payload: err.response.data.message }));
};    

export const logout = user => dispatch => {
    dispatch({ type: LOGGING_OUT });
    axios
        .get("http://localhost:5000/api/logout")
        .then(res => {
            localStorage.setItem('isLoggedIn', false);
            dispatch({ type: LOGGING_OUT_SUCCESSFUL, payload: user })
        })
        .catch(err => dispatch({ type: LOGGING_OUT_FAILED, payload: err }));
};

export const deleteAccount = user => dispatch => {
    dispatch({ type: DELETING_USER });
    axios
        .delete(`http://localhost:5000/api/delete/${user.id}`)
        .then(res => dispatch({ type: DELETING_USER_SUCCESSFUL, payload: {} }))
        .then(() => logout())
        .catch(err => dispatch({ type: DELETING_USER_FAILED, payload: err }));
};

export const updateUser = (user, updateUser) => dispatch => {
    dispatch({ type: UPDATING_USER });
    axios
        .put(`http://localhost:5000/api/update/${user.id}`, {'username': `${updateUser.username}`} )
        .then(res => dispatch({ type: UPDATING_USER_SUCCESSFUL, payload: updateUser.username }))
        .catch(err => dispatch({ type: UPDATING_USER_FAILED, payload: err }));
};