import { styled } from "styled-components";


const PageWrapper = styled.div`
    width: 100%;
    min-height: 100vh;
`;
const NavbarWrapper = styled.nav`
    background: #0e85c9;
    color: white;
    padding: 20px 10px;
    box-shadow: 1px 1px 11px #6d6d6d;

    @media only screen and (max-width: 500px) {
        & > div {
            font-size: 22px !important;
            letter-spacing: .1rem !important;
            text-align: center; 
            width: 100%;
        }
    }
`;
const NavbarTitleText = styled.div`
    font-family: sans-serif;
    font-size: 28px;
    text-transform: uppercase;
    letter-spacing: .2rem;
    font-weight: 600;
    
`;
const ContainerWrapper = styled.div`
    height: 100%;
    padding: 10px 15px;
`;

export {
    PageWrapper,
    NavbarWrapper,
    NavbarTitleText,
    ContainerWrapper
}