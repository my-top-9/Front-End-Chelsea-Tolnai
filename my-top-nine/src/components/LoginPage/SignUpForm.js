import React from 'react';
import { NavLink } from 'react-router-dom'

import styled from 'styled-components';

const Form = styled.form`
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
const Header = styled.h2`
    font-family: 'Major Mono Display', monospace;
    font-size: 30px;
    background-color: #EDEDED;
    margin-bottom: 20px;
`
const Input = styled.input`
    width: 100%;
    font-size: 16px;
    background-color: #EDEDED;
    margin-bottom: 15px;
    border: none;
    padding: 2%;
`
const Button = styled.button`
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
const StyledNavLink = styled(NavLink)`
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

const SignUp = props => {
    return (
        <Form onSubmit={props.handleSignUpSumbit} id="signupForm">

            <Header>Sign Up</Header>

            <Input 
                type="text"
                name="username"
                placeholder="Username..."
                value={props.newUser.username} 
                onChange={props.handleSignUpInput} 
            />

            <Input 
                type="email"
                name="email"
                placeholder="Email..."
                value={props.newUser.email} 
                onChange={props.handleSignUpInput} 
            />
            
            <Input 
                type="password"
                name="password1"
                placeholder="Password..." 
                value={props.newUser.password1} 
                onChange={props.handleSignUpInput}
            />
            <Input 
                type="password"
                name="password2"
                placeholder="Confirm Password..." 
                value={props.newUser.password2} 
                onChange={props.handleSignUpInput}
            />

            <Button type="submit">Sign Up</Button>
            <StyledNavLink to="/">Back to Login</StyledNavLink>
        
        </Form>
    );
}

export default SignUp;