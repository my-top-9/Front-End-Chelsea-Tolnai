
// ===== GLOBAL STYLED COMPONENTS ==== //
import styled from 'styled-components';
import { NavLink } from 'react-router-dom'

// === COLOR & FONT SCHEME == ///
const black = '#262626';
const purple = '#301077';
const pink = '#FC3768';
const white = '#EDEDED';

const textFont = 'Krub, sans-serif';
const headerFont = 'Major Mono Display, monospace';

// === ERROR & LOADING == ///

export const LoaderWrapper = styled.div`
    width: 100px;
    height: 100px;
    margin: 100px auto;
`
export const ErrorWrapper = styled.div`
    background-color: ${purple};
    color: ${white};
    font-family: ${textFont};
    font-size: 20px;
    font-weight: bold;
    padding: 20px;
    text-align: center;
`

// === NAVIGATION === ///

export const NavContainer = styled.nav`
    background-color: ${black};
    height: 70px;
    padding: 0 20px;
    border-bottom: 5px solid ${pink};
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    @media (max-width: 600px) {
        height: auto;
        flex-direction: column;
        padding-bottom: 10px;
    }
`
export const NavLinksWrapper = styled.div`
    display: flex;
    flex-direction: row:
    justify-content: flex-end;
    align-items: center;
    @media (max-width: 600px) {
        width: 100%;
        justify-content: space-evenly;
    }
`
export const NavAnchor = styled.a`
    font-family: ${headerFont};
    font-size: 35px;
    color: ${white};
    :hover {
        cursor: pointer;
        text-decoration: none;
        color: ${white};
    }
`
export const NavLinkButton = styled(NavLink)`
    font-family: ${textFont};
    font-weight: bold;
    color: ${pink};
    background-color: ${white};
    border: 2px solid ${pink};
    border-radius: 5px;
    padding: 10px;
    :hover {
        color: ${pink};
        border: 2px solid ${white};
        background-color: ${black};
    }
`
export const NavLinkStyled = styled(NavLink)`
    font-family: ${textFont};
    color: ${white};
    font-size: 18px;
    font-weight: 400;
    margin: 0 20px;
    :hover {
        color: #4397A4;
        text-decoration: none;
    }
    @media (max-width: 600px) {
        margin: 0;
    }
`

// === FORMS === ///

export const FormWrapper = styled.form`
    max-width: 550px;
    font-family: ${textFont};
    margin: 20px auto;
    padding: 30px;
    background-color: #4397A4;
    border-radius: 10px;
    @media (max-width: 600px) {
        margin: 20px 5%;
    }
`
export const FormHeader = styled.h2`
    font-family: ${headerFont};
    font-size: 30px;
    background-color: ${white};
    margin-bottom: 20px;
    padding: 2%;
`
export const Input = styled.input`
    width: 100%;
    font-size: 16px;
    background-color: ${white};
    margin-bottom: 15px;
    border: none;
    padding: 2%;
`
export const FormButton = styled.button`
    width: 50%;
    font-size: 16px;
    font-weight: bold;
    background-color: ${white};
    margin: 5px auto 10px;
    border: 1px solid ${white};
    padding: 2%;
    display: block;
    :hover {
        cursor: pointer;
        color: ${white};
        background-color: ${pink};
    }
`
export const FormNavLink = styled(NavLink)`
    font-family: ${textFont};
    font-weight: bold;
    color: ${black};
    text-decoration: underline;
    display: block;
    text-align: center;
    :hover {
        color: ${black};
        text-decoration: none;
    }
`

// === BUTTONS === ///

export const DangerButton = styled.button`
    width: 50%;
    font-size: 16px;
    font-weight: bold;
    color: ${white};
    background-color: ${pink};
    margin: 5px auto 10px;
    border: 1px solid ${white};
    padding: 2%;
    display: block;
    :hover {
        cursor: pointer;
        color: ${pink};
        background-color: ${white};
        border: 1px solid ${pink};
    }
`
export const CancelButton = styled.button`
    width: 50%;
    font-size: 16px;
    font-weight: bold;
    background-color: ${white};
    margin: 5px auto 10px;
    border: 1px solid ${white};
    padding: 2%;
    display: block;
    :hover {
        cursor: pointer;
        color: ${pink};
        background-color: ${white};
        border: 1px solid ${pink};
    }
`

// === PAGES === //
export const PageContainer = styled.div`
    font-family: ${textFont};
    margin: 0 auto;
    padding: 20px;
`

// === HEADERS & TEXT === ///

export const SubPageHeader = styled.h3`
    background-color: ${purple};
    color: ${white};
    font-family: ${textFont};
    font-size: 30px;
    font-weight: bold;
    padding: 20px;
    text-align: center;
`
export const MainPageHeader = styled.h2`
    color: ${black};
    font-size: 65px;
    font-weight: 400px;
    line-height: 65px;
    @media (max-width: 600px) {
        font-size: 55px;
    }
`

// === CARDS === //
export const CardsContainer = styled.div`
    margin-left: 20%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
`
export const CardWrapper = styled.div`
    flex: 1 0 26%;
`
export const CardFront = styled.div`
    width: 120px;
    height: 120px;
    background-color: ${pink};
    color: ${black};
    padding: 10px;
    border-radius: 20px;
    margin: 8% 2%;
    box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.2);
`
export const CardBack = styled.div`
    width: 120px;
    height: 120px;
    background-color: ${black};
    color: ${white};
    padding: 10px;
    border-radius: 20px;
    margin: 8% 2%;
    box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.2);
`

// === MEDIA TOGGLES === //
export const MediaToggleHide = styled.div`
    @media (max-width: 600px) {
        display: none;
    }
`
export const MediaToggleShow = styled.div`
    @media (min-width: 600px) {
        display: none;
    }
`