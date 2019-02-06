import React from 'react';

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
    margin: 5px auto;
    border: 1px solid #EDEDED;
    padding: 2%;
    display: block;
    :hover {
        cursor: pointer;
        color: #EDEDED;
        background-color: #FC3768;
    }
`

const Login = props => {
    return (
        <Form onSubmit={props.handleLoginSumbit} id="loginForm">

            <Header>Login</Header>

            <Input 
                type="text"
                name="username"
                placeholder="Username..."
                value={props.user.username} 
                onChange={props.handleLoginInput} 
            />

            <Input 
                type="password"
                name="password"
                placeholder="Password..." 
                value={props.user.password} 
                onChange={props.handleLoginInput}
            />

            <Button type="submit">Login</Button>
        
        </Form>
    );
}

export default Login;