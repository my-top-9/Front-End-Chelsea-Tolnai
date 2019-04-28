import React from 'react';
import { NavLink } from 'react-router-dom';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem, Tooltip } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import styled from 'styled-components';
import { 
    NavContainer, 
    NavAnchor, 
    NavLinksWrapper, 
    NavLinkStyled,
    MediaToggleHide,
    MediaToggleShow,
} from '../../Reusable/StyledComponents'

const NavDivider = styled.span`
    color: #EDEDED;
    font-size: 20px;
`
const DropdownNavLink = styled(NavLink)`
    color: #262626;
    :hover {
        color: #262626;
    }
`
const styledDropdown = {
    fontFamily: 'Krub',
};
const styledDropdownToggle = {
    fontFamily: 'Krub',
    fontWeight: 'bold',
    color: '#FC3768',
    backgroundColor: '#EDEDED',
    border: '2px solid #FC3768',
    borderRadius: '5px',
    padding: '10px',
};
const styledDropdownMenu = {
    backgroundColor: '#4397A4',
};
const styledDropdownHeader = {
    fontFamily: 'Major Mono Display',
    fontSize: '18px',
    color: '#EDEDED',
};

const NavBar = (props) => {
    return (
        <NavContainer>
            <NavAnchor href="https://angry-cray-eb6e34.netlify.com/#" target="_blank">MyTopNine</NavAnchor>
            <NavLinksWrapper>
                <NavLinkStyled to="/">Home</NavLinkStyled>
                <NavDivider>|</NavDivider>
                <NavLinkStyled exact to={`/${props.username}`}>My <FontAwesomeIcon icon="th" /></NavLinkStyled>
                
                <MediaToggleShow><NavDivider>|</NavDivider></MediaToggleShow>
                <MediaToggleShow><NavLinkStyled to={`/${props.username}/account`}><FontAwesomeIcon icon="cog" /></NavLinkStyled></MediaToggleShow>
                <MediaToggleShow><NavDivider>|</NavDivider></MediaToggleShow>        
                <MediaToggleShow>
                    <NavLinkStyled to="/" onClick={props.logout}>
                        <FontAwesomeIcon icon="sign-out-alt" href="#" id="LogoutTooltip"/>
                        <Tooltip style={{backgroundColor: '#FC3768'}} placement="bottom" isOpen={props.tooltipOpen} target="LogoutTooltip" toggle={props.toggleTooltip}>
                        LogOut
                        </Tooltip>
                    </NavLinkStyled>
                </MediaToggleShow>  

                <MediaToggleHide>
                    <Dropdown isOpen={props.dropdownOpen} toggle={props.toggleDrop} style={styledDropdown}>
                        <DropdownToggle caret style={styledDropdownToggle}>
                            Account
                        </DropdownToggle>

                        <DropdownMenu right style={styledDropdownMenu}>
                            <DropdownItem header style={styledDropdownHeader}>Account Settings</DropdownItem>
                            <DropdownItem divider/>

                            <DropdownItem>
                                <DropdownNavLink to={`/${props.username}/account`}>Edit Account</DropdownNavLink>
                            </DropdownItem>
                            <DropdownItem >
                                <DropdownNavLink to="/" onClick={props.logout}>LogOut</DropdownNavLink>
                            </DropdownItem>
                        </DropdownMenu>
                    </Dropdown>
                </MediaToggleHide>
            </NavLinksWrapper>
            
        </NavContainer>
    );
}

export default NavBar;