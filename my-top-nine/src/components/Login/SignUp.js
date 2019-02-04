import React from 'react';
import { Card, CardTitle, Form, Input, Button } from 'reactstrap';
import { NavLink } from 'react-router-dom'

const SignUp = props => {
    return (
        <Card >
            <Form onSubmit={props.handleSingUpSumbit} id="signupForm">

                <CardTitle>My Top Nine</CardTitle>

                <Input 
                    type="email"
                    name="email"
                    placeholder="Email..."
                    value={props.newUser.email} 
                    onChange={props.handleSignUpInput} 
                />

                <Input 
                    type="text"
                    name="username"
                    placeholder="Username..."
                    value={props.newUser.username} 
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
                <NavLink to="/">Back to Login</NavLink>
            
            </Form>
        </Card>
    );
}

export default SignUp;