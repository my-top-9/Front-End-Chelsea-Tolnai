import React from 'react';

import { ErrorWrapper } from './StyledComponents';

const Error = props => {
    return (
        <ErrorWrapper>
            {props.error} <br></br>
            {props.message}
        </ErrorWrapper>
    );
}

export default Error;