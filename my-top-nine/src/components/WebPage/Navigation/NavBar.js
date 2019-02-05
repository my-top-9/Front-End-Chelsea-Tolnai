import React from 'react';
import { NavLink } from 'react-router-dom'

const NavBar = (props) => {
    return (
        <nav>
            <h1>My Top 9</h1>
            <NavLink to="/">Home</NavLink>
            <NavLink to={`/${props.username}`}>MyPage</NavLink>
            <NavLink to="/" onClick={props.logout}>LogOut</NavLink>
        </nav>
    );
}

export default NavBar;