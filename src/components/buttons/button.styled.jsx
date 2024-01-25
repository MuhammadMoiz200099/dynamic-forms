import { styled } from "styled-components";

const PrimaryButtonWrapper = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    padding: 10px 30px;
    font-size: 18px;
    font-weight: 600;
    border: 1px solid #2b80c9;
    background: #0e86c9;
    color: white;
    border-radius: 5px;
    cursor: pointer;
    &:hover {
        background: #0a6a9f !important;
    }
`;


export {
    PrimaryButtonWrapper
}