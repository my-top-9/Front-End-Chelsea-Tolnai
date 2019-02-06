import React from 'react';

import { 
    FormWrapper,
    FormHeader,
    Input,
    FormButton,
    FormNavLink,
} 
from '../Reusable/StyledComponents'

const Login = props => {
    return (
        <FormWrapper onSubmit={props.handleLoginSumbit} id="loginForm">

            <FormHeader>Login</FormHeader>

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

            <FormButton type="submit">Login</FormButton>
            <FormNavLink to="/signup">Not a member? Sign Up</FormNavLink>
        
        </FormWrapper>
    );
}

export default Login;