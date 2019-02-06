
// ===== GLOBAL STYLED COMPONENTS ==== //
import styled from 'styled-components';
import { NavLink } from 'react-router-dom'


// === ERROR / LOADING == ///

export const LoaderWrapper = styled.div`
    width: 100px;
    height: 100px;
    margin: 100px auto;
`
export const ErrorWrapper = styled.div`
    background-color: #301077;
    color: #EDEDED;
    font-family: 'Krub', sans-serif;
    font-size: 20px;
    font-weight: bold;
    padding: 30px;
    text-align: center;
`

// === NAVIGATION === ///

export const NavContainer = styled.nav`
    background-color: #262626;
    height: 70px;
    padding: 0 20px;
    border-bottom: 5px solid #FC3768;
    display: flex;
    justify-content: space-between;
    align-items: center;
`
export const NavAnchor = styled.a`
    font-family: 'Major Mono Display', monospace;
    font-size: 35px;
    color: #EDEDED;
    :hover {
        cursor: pointer;
        text-decoration: none;
        color: #EDEDED;
    }
`
export const StyledNavLink = styled(NavLink)`
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

// === FORMS === ///

export const FormWrapper = styled.form`
    max-width: 550px;
    font-family: 'Krub', sans-serif;
    margin: 20px auto;
    padding: 30px;
    background-color: #4397A4;
    border-radius: 10px;
    @media (max-width: 600px) {
        margin: 20px 5%;
    }
`
export const FormHeader = styled.h2`
    font-family: 'Major Mono Display', monospace;
    font-size: 30px;
    background-color: #EDEDED;
    margin-bottom: 20px;
`
export const Input = styled.input`
    width: 100%;
    font-size: 16px;
    background-color: #EDEDED;
    margin-bottom: 15px;
    border: none;
    padding: 2%;
`
export const FormButton = styled.button`
    width: 50%;
    font-size: 16px;
    font-weight: bold;
    background-color: #EDEDED;
    margin: 5px auto 10px;
    border: 1px solid #EDEDED;
    padding: 2%;
    display: block;
    :hover {
        cursor: pointer;
        color: #EDEDED;
        background-color: #FC3768;
    }
`
export const FormNavLink = styled(NavLink)`
    font-family: 'Krub', sans-serif;
    font-weight: bold;
    color: #262626;
    text-decoration: underline;
    display: block;
    text-align: center;
    :hover {
        color: #262626;
        text-decoration: none;
    }
`

// === BUTTONS === ///

