import React from 'react';
import { NavLink } from 'react-router-dom'

const NavBar = (props) => {
    return (
        <div>
            <div>My Top 9</div>
            <NavLink to="/">Home</NavLink>
            <NavLink to={`/${props.username}`}>MyPage</NavLink>
            <NavLink to="/" onClick={props.logout}>LogOut</NavLink>
        </div>
    );
}

export default NavBar;