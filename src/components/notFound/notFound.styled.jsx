import { styled } from "styled-components";

const WrapperContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
    overflow: hidden
    background: #bfeae1;
`;
const Heading = styled.h1`
    font-size: 110px;
    line-height: 46px;
    margin-bottom: 50px;
    font-family: sans-serif;
    text-transform: uppercase;
    letter-spacing: 1rem;
`;
const TextWrapper = styled.p`
    font-family: sans-serif;
    text-transform: uppercase;
    letter-spacing: 1rem;
`;
const ButtonContainer = styled.div`
    margin-top: 40px;
`;
const ButtonWrapper = styled.button`
    min-width: 170px;
    background: #68c950;
    padding: 8px 25px;
    border-radius: 4px;
    color: #FFF;
    font-weight: bold;
    font-size: 14px;
    transition: all 0.3s linear;
    cursor: pointer;
    text-decoration: none;
    margin-right: 10px;
    border: none;

    &:hover {
        background: #5A5C6C;
        color: #fff;
    }
`;

export {
    WrapperContainer,
    Heading,
    TextWrapper,
    ButtonContainer,
    ButtonWrapper
}