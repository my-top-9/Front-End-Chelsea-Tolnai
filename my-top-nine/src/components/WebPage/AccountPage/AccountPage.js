import React from 'react';
import { Card, CardTitle, Form, Label, Input, Button } from 'reactstrap';

const AccountPage = props => {
    return (
        <Card >
            <Form onSubmit={props.handleAccountSumbit} id="accountForm">

                <CardTitle>{`${props.user.username}'s Account`}</CardTitle>

                <Label for="username">Change Username</Label>

                <Input 
                    type="text"
                    name="username"
                    id="username"
                    placeholder="Change Username..."
                    value={props.updateUser.username} 
                    onChange={props.handleAccountInput} 
                />
    
                <Button type="submit">Update Account</Button>
                <Button type="submit" onClick={props.deleteAccount}>Delete Account</Button>

            </Form>
        </Card>
    );
}

export default AccountPage;