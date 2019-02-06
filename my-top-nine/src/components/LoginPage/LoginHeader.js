import React from 'react';
import { NavLink } from 'react-router-dom'

import styled from 'styled-components';

const NavContainer = styled.nav`
    background-color: #262626;
    height: 70px;
    padding: 0 20px;
    border-bottom: 5px solid #FC3768;
    display: flex;
    justify-content: space-between;
    align-items: center;
`
const Link = styled.a`
    font-family: 'Major Mono Display', monospace;
    font-size: 35px;
    color: #EDEDED;
    :hover {
        cursor: pointer;
        text-decoration: none;
        color: #EDEDED;
    }
`
const StyledNavLink = styled(NavLink)`
    font-family: 'Krub', sans-serif;
    font-weight: bold;
    color: #FC3768;
    background-color: #EDEDED;
    border: 2px solid #FC3768;
    border-radius: 5px;
    padding: 5px 10px;
    :hover {
        color: #FC3768;
        border: 2px solid #EDEDED;
        background-color: #262626;
    }
`

const LoginHeader = () => {
    return (
        <NavContainer>
            <Link href="https://angry-cray-eb6e34.netlify.com/#">MyTopNine</Link>
            <StyledNavLink to="/signup">Sign Up</StyledNavLink>
        </NavContainer>
    );
}

export default LoginHeader;