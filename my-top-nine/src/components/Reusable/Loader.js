import React from 'react';
import Loader from 'react-loader-spinner';

import styled from 'styled-components';

const LoaderWrapper = styled.div`
    width: 100px;
    height: 100px;
    margin: 100px auto;
`

const LoaderGrid = () => {
    return (
        <LoaderWrapper>
            <Loader type="Grid" color="262626" height="100" width="100" />
        </LoaderWrapper>
    );
}

export default LoaderGrid;