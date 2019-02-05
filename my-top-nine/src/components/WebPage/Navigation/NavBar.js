import React from 'react';
import { NavLink } from 'react-router-dom';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

const NavBar = (props) => {
    return (
        <nav>
            <h1>My Top 9</h1>
            <NavLink to="/">Home</NavLink>
            <NavLink exact to={`/${props.username}`}>MyPage</NavLink>
            
            <Dropdown isOpen={props.dropdownOpen} toggle={props.toggleDrop}>
                <DropdownToggle caret>
                    Account
                </DropdownToggle>
                <DropdownMenu>
                    <DropdownItem header>Account Settings</DropdownItem>
                    <DropdownItem>
                        <NavLink to={`/${props.username}/account`}>Edit Account</NavLink>
                    </DropdownItem>
                    <DropdownItem>
                        <NavLink to="/" onClick={props.logout}>LogOut</NavLink>
                    </DropdownItem>
                </DropdownMenu>
            </Dropdown>
            
        </nav>
    );
}

export default NavBar;