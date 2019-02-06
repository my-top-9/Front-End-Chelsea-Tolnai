import React from 'react';
import Loader from 'react-loader-spinner';

import { LoaderWrapper } from './StyledComponents'

const LoaderGrid = () => {
    return (
        <LoaderWrapper>
            <Loader type="Grid" color="262626" height="100" width="100" />
        </LoaderWrapper>
    );
}

export default LoaderGrid;