import { styled } from "styled-components";

const LoadingWrapper = styled.div`
    @keyframes spin {
        0% {
            transform: rotate(0deg);
        }

        100% {
            transform: rotate(360deg);
        }
    }
`;
const LoadingButton = styled.div`
    border: 3px solid #fffefe;
    border-top: 3px solid hsl(211.09deg 86.47% 29.67%);
    border-radius: 50%;
    width: 20px;
    height: 20px;
    animation: spin 1.5s linear infinite;
`;

export {
    LoadingWrapper,
    LoadingButton
}