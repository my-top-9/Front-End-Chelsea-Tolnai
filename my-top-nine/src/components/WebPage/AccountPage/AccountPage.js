import React from 'react';
import { Card, CardTitle, Form, Label, Input, Button } from 'reactstrap';

const AccountPage = props => {
    return (
        <Card >
            <Form id="accountForm">

                <CardTitle>{`${props.username}'s Account`}</CardTitle>

                <Label for="username">Change Username</Label>

                <Input 
                    type="text"
                    name="username"
                    id="username"
                    placeholder="Change Username..."
                    value={props.updateUser.username} 
                    onChange={props.handleAccountInput} 
                />
    
                <Button onClick={props.updateAccount}>Update Account</Button>
                <Button onClick={props.deleteAccount}>Delete Account</Button>

            </Form>
        </Card>
    );
}

export default AccountPage;