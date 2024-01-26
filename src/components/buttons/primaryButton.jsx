import React from 'react';
import { PrimaryButtonWrapper } from "./button.styled";
import Loader from '../loader/loader';

const PrimaryButton = ({ title, isLoading = false, type= "button", onClick, disabled = false }) => {
    return (
        <PrimaryButtonWrapper onClick={onClick} type={type} disabled={disabled}>
            {isLoading && (<Loader />)} {title}
        </PrimaryButtonWrapper>
    )
}

export default PrimaryButton