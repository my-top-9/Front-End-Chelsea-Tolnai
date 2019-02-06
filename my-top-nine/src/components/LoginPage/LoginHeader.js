import React from 'react';

import { NavContainer, NavAnchor, StyledNavLink } from '../Reusable/StyledComponents';

const LoginHeader = () => {
    return (
        <NavContainer>
            <NavAnchor href="https://angry-cray-eb6e34.netlify.com/#">MyTopNine</NavAnchor>
            <StyledNavLink to="/signup">Sign Up</StyledNavLink>
        </NavContainer>
    );
}

export default LoginHeader;