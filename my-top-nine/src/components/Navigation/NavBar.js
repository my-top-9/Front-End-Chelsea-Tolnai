import React from 'react';
import { NavLink } from 'react-router-dom'

const NavBar = (props) => {
    return (
        <div>
            <div>My Top 9</div>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/user">MyPage</NavLink>
            <div onClick={props.logout}>LogOut</div>
        </div>
    );
}

export default NavBar;