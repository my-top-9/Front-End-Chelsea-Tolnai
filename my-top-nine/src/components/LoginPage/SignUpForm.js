import React from 'react';

import { 
    FormWrapper,
    FormHeader,
    Input,
    FormButton,
    FormNavLink,
} 
from '../Reusable/StyledComponents'

const SignUp = props => {
    return (
        <FormWrapper onSubmit={props.handleSignUpSumbit} id="signupForm">

            <FormHeader>Sign Up</FormHeader>

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

            <FormButton type="submit">Sign Up</FormButton>
            <FormNavLink to="/">Back to Login</FormNavLink>
        
        </FormWrapper>
    );
}

export default SignUp;