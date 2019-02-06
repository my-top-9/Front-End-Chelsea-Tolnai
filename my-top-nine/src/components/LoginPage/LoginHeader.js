import React from 'react';

import { NavContainer, NavAnchor, NavLinksWrapper, NavLinkButton } from '../Reusable/StyledComponents';

const LoginHeader = () => {
    return (
        <NavContainer>
            <NavAnchor href="https://angry-cray-eb6e34.netlify.com/#">MyTopNine</NavAnchor>
            <NavLinksWrapper>
                <NavLinkButton to="/signup">Sign Up</NavLinkButton>
            </NavLinksWrapper>
            
        </NavContainer>
    );
}

export default LoginHeader;