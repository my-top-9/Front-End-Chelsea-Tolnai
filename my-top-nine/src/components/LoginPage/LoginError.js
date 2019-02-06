import React from 'react';

import styled from 'styled-components';

const ErrorWrapper = styled.div`
    background-color: #301077;
    color: #EDEDED;
    font-family: 'Krub', sans-serif;
    font-size: 20px;
    font-weight: bold;
    padding: 30px;
    text-align: center;
`

const LoginError = props => {
    return (
        <ErrorWrapper>{props.error} <br></br>
        Or try Signing Up!</ErrorWrapper>
    );
}

export default LoginError;