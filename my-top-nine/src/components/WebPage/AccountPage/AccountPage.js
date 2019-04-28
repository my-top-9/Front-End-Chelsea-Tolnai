import React from 'react';
import { 
    CardText, 
    Label, 
    Modal, 
    ModalHeader, 
    ModalBody, 
    ModalFooter
} from 'reactstrap';

import { 
    PageContainer, 
    SubPageHeader, 
    FormWrapper, 
    FormHeader, 
    Input, 
    FormButton, 
    DangerButton,
    CancelButton 
} from '../../Reusable/StyledComponents';

const AccountPage = props => {
    return (
        <PageContainer>
            <SubPageHeader>{`${props.username}'s Account`}</SubPageHeader>

            <FormWrapper id="accountForm">

                <FormHeader>Update Account</FormHeader>

                <Label for="username">Change Username</Label>
                <Input 
                    type="text"
                    name="username"
                    id="username"
                    placeholder="Enter Username..."
                    value={props.updateUser.username} 
                    onChange={props.handleAccountInput} 
                />
                
                <Label for="password">Change Password</Label>
                <Input 
                    type="password"
                    name="password"
                    id="password"
                    placeholder="Enter Password..."
                    value={props.updateUser.password} 
                    onChange={props.handleAccountInput} 
                />

                <CardText>Re-Enter current Username/Password if you do not wish to edit that credential.</CardText>

                <FormButton onClick={props.updateAccount} color="primary">Update Account</FormButton>

            </FormWrapper>

            <FormWrapper>
                <FormHeader>Delete Account</FormHeader>

                <DangerButton onClick={props.toggleDeleteModal}>Delete Account</DangerButton>
                    <Modal toggle={props.toggleDeleteModal} isOpen={props.deleteModal}>
                        <ModalHeader toggle={props.toggleDeleteModal}>Delete Account</ModalHeader>
                        <ModalBody>
                            Are you sure you want to delete this account? This action cannot be undone and all account information will be lost.
                        </ModalBody>
                        <ModalFooter>
                            <DangerButton onClick={props.deleteAccount}>Delete Account</DangerButton>{' '}
                            <CancelButton onClick={props.toggleDeleteModal}>Cancel</CancelButton>
                        </ModalFooter>
                    </Modal>
            </FormWrapper>
        </PageContainer>
    );
}

export default AccountPage;