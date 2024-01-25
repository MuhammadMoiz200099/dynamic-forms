import React from 'react';
import { WrapperContainer, Heading, TextWrapper, ButtonContainer, ButtonWrapper } from "./notFound.styled";
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
    const navigate = useNavigate();

    const routeBackToHome = (e) => {
        e.preventDefault();
        navigate('/')
    }
    const routeBackToLastLocation = (e) => {
        e.preventDefault();
        navigate('../');
    }

    return (
        <WrapperContainer>
            <Heading>404</Heading>
            <TextWrapper>Page not found</TextWrapper>
            <ButtonContainer>
                <ButtonWrapper onClick={routeBackToLastLocation}>Go Back</ButtonWrapper>
                <ButtonWrapper onClick={routeBackToHome}>Go to Home Page</ButtonWrapper>
            </ButtonContainer>
        </WrapperContainer>
    )
}

export default NotFound