import React from 'react';
import { PrimaryButtonWrapper } from "./button.styled";
import Loader from '../loader/loader';

const PrimaryButton = ({ title, isLoading = false, onClick, disabled = false }) => {
    return (
        <PrimaryButtonWrapper onClick={onClick} disabled={disabled}>
            {isLoading && (<Loader />)} {title}
        </PrimaryButtonWrapper>
    )
}

export default PrimaryButton