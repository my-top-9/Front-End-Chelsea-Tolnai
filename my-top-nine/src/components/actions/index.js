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

export const signup = (user, history) => dispatch => {
    dispatch({ type: REGISTERING_USER });
    axios
        .post("https://my-top-9.herokuapp.com/api/register", user)
        .then(() => {
            dispatch({ type: REGISTERING_USER_SUCCESSFUL, payload: user });
            history.replace('/');
        })
        .catch(err => dispatch({ type: REGISTERING_USER_FAILED, 
            payload: err.response.data.message
        }));
};

export const login = user => dispatch => {
    dispatch({ type: LOGGING_IN });
    axios
        .post("https://my-top-9.herokuapp.com/api/login", user)
        .then( () => {
            localStorage.setItem('isLoggedIn', true);
            localStorage.setItem('username', user.username);
        })
        .then(() => dispatch({ type: LOGGING_IN_SUCCESSFUL, payload: user }))
        .catch(err => dispatch({ type: LOGGING_IN_FAILED, payload: err.response.data.message }));
};    

export const logout = user => dispatch => {
    dispatch({ type: LOGGING_OUT });
    axios
        .get("https://my-top-9.herokuapp.com/api/logout")
        .then(() => {
            localStorage.setItem('isLoggedIn', false);
            localStorage.setItem('username', '');
            localStorage.clear();
            dispatch({ type: LOGGING_OUT_SUCCESSFUL, payload: user })
        })
        .catch(err => dispatch({ type: LOGGING_OUT_FAILED, payload: err }));
};

export const deleteAccount = userDelete => dispatch => {
    axios
        .get('https://my-top-9.herokuapp.com/api/users')
        .then((res) => deleteUser(res.data.filter(user => user.username === userDelete)[0].id)(dispatch))
        .catch(err => dispatch({ type: DELETING_USER_FAILED, payload: err }));
};

export const deleteUser = id => dispatch => {
    dispatch({ type: DELETING_USER });
    axios
        .delete(`https://my-top-9.herokuapp.com/api/delete/${id}`)
        .then(() => dispatch({ type: DELETING_USER_SUCCESSFUL, payload: {} }))
        .then(() => logout()(dispatch))
        .catch(err => dispatch({ type: DELETING_USER_FAILED, payload: err }));
}

export const updateAccount = (userUpdate, newUserUpdate) => dispatch => {
    dispatch({ type: UPDATING_USER });
    axios
        .get('https://my-top-9.herokuapp.com/api/users')
        .then((res) => updateUser(res.data.filter(user => user.username === userUpdate)[0].id, newUserUpdate)(dispatch))
        .catch(err => dispatch({ type: UPDATING_USER_FAILED, payload: err }));
};

export const updateUser = (id, updateUser) => dispatch => {
    axios
        .put(`https://my-top-9.herokuapp.com/api/update/${id}`, updateUser)
        .then(res => dispatch({ type: UPDATING_USER_SUCCESSFUL, payload: updateUser.username }))
        .then(() => logout()(dispatch))
        .catch(err => dispatch({ type: UPDATING_USER_FAILED, payload: err }));
};