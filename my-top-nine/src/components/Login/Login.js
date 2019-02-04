import React, { Component } from 'react';
import ls from 'local-storage';
import { Card, CardTitle, Form, Input, Button } from 'reactstrap';

class Login extends Component {
    
    state = {
            username: "",
            password: "",
            user: {}
    }

    handleValueChange = (e) => {
        this.setState({[e.target.name]: e.target.value});
    }

    handleSumbit = () => {
        const user = {
            username: this.state.username,
            password: this.state.password
        }
        ls.set('user', user)
        this.setState({
            user: ls.get('user'),
        });
        window.location.reload();
    }

    render() {
        return (
            <Card >
                <Form onSubmit={this.handleSumbit}>

                    <CardTitle>My Top Nine</CardTitle>

                    <Input 
                        type="text"
                        name="username"
                        placeholder="Username..."
                        value={this.state.username} 
                        onChange={this.handleValueChange} 
                    />

                    <Input 
                        type="password"
                        name="password"
                        placeholder="Password..." 
                        value={this.state.password} 
                        onChange={this.handleValueChange}
                    />

                    <Button type="submit">Login</Button>
                
                </Form>
            </Card>
        );
    }
}

export default Login;