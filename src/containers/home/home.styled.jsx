import { styled } from "styled-components";

const PageWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;

    .file-input {
        display: none;
    }
    
    .title {
        margin-top: 40px;
        font-family: sans-serif;
        font-size: 24px;
        text-transform: uppercase;
        letter-spacing: .2rem;
        font-weight: 600;
    }


    @media only screen and (max-width: 500px) {
        .upload-wrapper {
            .draggin-text {
                font-size: 20px;
                letter-spacing: .3rem;
            }
        }
    }

    @media only screen and (max-width: 400px) {
        .upload-wrapper {
            .draggin-text {
                font-size: 16px;
                letter-spacing: .2rem;
            }
        }
    }

`;

const UploadBoxWrapper = styled.div`
    width: 80%;
    min-height: 250px;
    border: 3px dashed #2e2e2e;
    padding: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    cursor: pointer; 

    .hr-line {
        width: 80%;
        border-top: 2px dashed #2e2e2e; 
    }

    .upload-icon {
        font-size: 36px;
    }

    .draggin-text {
        font-family: sans-serif;
        font-size: 24px;
        text-transform: uppercase;
        letter-spacing: .5rem;
        font-weight: 600;
    }

    &:hover {
        border: 3px dashed green;
    }

`;

const FileDetails = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;


    .file-name {
        font-family: sans-serif;
        font-size: 18px;
        text-transform: uppercase;
        letter-spacing: .2rem;
        font-weight: 600;
    }
`

export {
    PageWrapper,
    UploadBoxWrapper,
    FileDetails
}