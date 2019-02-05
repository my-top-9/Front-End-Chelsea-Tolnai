import axios from 'axios';

export const GETTING_USERS = "GETTING_USERS";
export const GETTING_USERS_SUCCESSFUL = "GETTING_USERS_SUCCESSFUL";
export const GETTING_USERS_FAILED = "GETTING_USERS_FAILED";

export const REGISTERING_USER = "REGISTERING_USER";
export const REGISTERING_USER_SUCCESSFUL = "REGISTERING_USER_SUCCESSFUL";
export const REGISTERING_USER_FAILED = "REGISTERING_USER_FAILED";

export const LOG_IN = "LOG_IN";
export const LOG_OUT = "LOG_OUT";

export const DELETING_USER = "DELETING_USER";
export const DELETING_USER_SUCCESSFUL = "DELETING_USER_SUCCESSFUL";
export const DELETING_USER_FAILED = "DELETING_USER_FAILED";

export const UPDATING_USER = "UPDATING_USER";
export const UPDATING_USER_SUCCESSFUL = "UPDATING_USER_SUCCESSFUL";
export const UPDATING_USER_FAILED = "UPDATING_USER_FAILED";

export const getUsers = () => dispatch => {
    dispatch({ type: GETTING_USERS });
    axios
        .get("http://localhost:5000/api/users")
        .then(res => dispatch({ type: GETTING_USERS_SUCCESSFUL, payload: res.data }))
        .catch(err => dispatch({ type: GETTING_USERS_FAILED, payload: err }));
};

export const signup = user => dispatch => {
    dispatch({ type: REGISTERING_USER });
    axios
        .post("http://localhost:5000/api/register", user)
        .then(res => dispatch({ type: REGISTERING_USER_SUCCESSFUL, payload: user }))
        .then(() => getUsers()(dispatch))
        .catch(err => dispatch({ type: REGISTERING_USER_FAILED, payload: err }));
};

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
        .then(() => getUsers()(dispatch))
        .catch(err => dispatch({ type: UPDATING_USER_FAILED, payload: err }));
};