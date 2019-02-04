import React from 'react';
import { Card, CardTitle, Form, Input, Button } from 'reactstrap';
import { NavLink } from 'react-router-dom'

const Login = props => {
    return (
        <Card >
            <Form onSubmit={props.handleLoginSumbit} id="loginForm">

                <CardTitle>My Top Nine</CardTitle>

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
                <NavLink to="/signup">Sign Up</NavLink>
            
            </Form>
        </Card>
    );
}

export default Login;