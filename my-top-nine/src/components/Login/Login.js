import React from 'react';
import { Card, CardTitle, Form, Input, Button } from 'reactstrap';

const Login = props => {
    return (
        <Card >
            <Form onSubmit={props.handleLoginSumbit} id="loginForm">

                <CardTitle>My Top Nine</CardTitle>

                <Input 
                    type="text"
                    name="username"
                    placeholder="Username..."
                    value={props.username} 
                    onChange={props.handleLoginInput} 
                />

                <Input 
                    type="password"
                    name="password"
                    placeholder="Password..." 
                    value={props.password} 
                    onChange={props.handleLoginInput}
                />

                <Button type="submit">Login</Button>
            
            </Form>
        </Card>
    );
}

export default Login;