import React from 'react';

import { LoadingWrapper, LoadingButton } from "./loader.styled.jsx"

const Loader = () => {
    return (
        <LoadingWrapper>
            <LoadingButton className="loading-spinner"></LoadingButton>
        </LoadingWrapper>
    )
}

export default Loader