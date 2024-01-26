import { styled } from "styled-components";

const PageWrapper = styled.div`

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;

    .title {
        display: flex;
        align-items: center;
        gap: 10px;
        margin-top: 40px;
        font-family: sans-serif;
        font-size: 24px;
        text-transform: uppercase;
        letter-spacing: .5rem;
        font-weight: 600;
    }

    .my-form {
        width: 600px;
        box-shadow: 1px 1px 8px #bebebe;
        border-radius: 5px;
        padding: 20px;
    }

    .form-button-container {
        display: flex;
        justify-content: end;
    }


    @media only screen and (max-width: 700px) {
        .my-form {
            width: 500px;
        }

        input {
            padding: 8px;
            outline: none;
            font-size: 12px;
        }

    }
    @media only screen and (max-width: 570px) {
        .my-form {
            width: 450px;

            label {
                font-size: 14px;
                text-transform: uppercase;
                letter-spacing: .1rem;
            }

        }
    }
    @media only screen and (max-width: 520px) {
        .my-form {
            width: 430px;

            label {
                font-size: 14px;
                text-transform: uppercase;
                letter-spacing: .1rem;
            }

            .inline-container-form-group {
                gap: 6px;
            }

        }
    }
    @media only screen and (max-width: 494px) {
        .my-form {
            width: 90%;

            label {
                font-size: 12px;
                text-transform: uppercase;
                letter-spacing: .1rem;
            }

            .inline-container-form-group {
                gap: 10px;
                flex-wrap: wrap;
            }

            .form-container {
                gap: 10px;
            }

        }
    }


`;

const FormWrapper = styled.form`

`;
const FormControlContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
    margin-bottom: 20px;
`;
const FormControl = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 100%;

    .star {
        color: red;
        font-weight: bold;
        font-size: 20px;
    }

`;
const FormLabel = styled.label`
    font-family: sans-serif;
    font-size: 16px;
    text-transform: uppercase;
    letter-spacing: .2rem;
    font-weight: 600;
`;
const FormInput = styled.input`
    border: none;
    box-shadow: inset 1px 1px 5px #bebebe;
    background: #e6e6e6;
    border-radius: 5px;
    padding: 10px;
    outline: none;
    font-size: 14px;
    color: #5d5d5d;
`;
const InlineFormFieldsContainer = styled.div`
    display: flex;
    justify-content: space-between;
    gap: 10px;
    width: 100%;
`;
const FormSelect = styled.select`
    border: none;
    box-shadow: inset 1px 1px 5px #bebebe;
    background: #e6e6e6;
    border-radius: 5px;
    padding: 10px;
    outline: none;
    font-size: 14px;
    color: #5d5d5d;
    cursor: pointer;
`;
const FormSelectOption = styled.option`
`;
const FormTextArea = styled.textarea`
    border: none;
    box-shadow: inset 1px 1px 5px #bebebe;
    background: #e6e6e6;
    border-radius: 5px;
    padding: 10px;
    outline: none;
    font-size: 14px;
    color: #5d5d5d;
`;

export {
    PageWrapper,
    FormWrapper,
    FormControlContainer,
    FormControl,
    FormLabel,
    FormInput,
    InlineFormFieldsContainer,
    FormSelect,
    FormSelectOption,
    FormTextArea
}