import React, { useEffect } from 'react';
import { PageWrapper, FormWrapper, FormControl, FormControlContainer, FormLabel, FormInput, InlineFormFieldsContainer, FormSelect, FormSelectOption, FormTextArea } from "./thankyou.styled";
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { resetFileData } from '../../redux/slices/file.slice';
import { FaSmile } from "react-icons/fa";
import PrimaryButton from '../../components/buttons/primaryButton';


const Thankyou = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const fileData = useSelector((state) => state.file.fileData);
    const formDetails = useSelector((state) => state.file.submitData);

    const gotoHome = () => {
        navigate('/app/home');
        dispatch(resetFileData())
    }

    useEffect(() => {
        if (!fileData && !fileData?.length) {
            gotoHome();
        }
    }, [])

    return (
        <PageWrapper>
            <div className='title'>Thankyou <FaSmile color='#f5ad20' /></div>
            <div className='subtitle'>Your Response have been saved Successfully</div>
            {fileData && fileData?.length ? (
                <FormWrapper className='my-form'>
                    <FormControlContainer className='form-container'>
                        {fileData.map((item) => (<>
                            {item.type === 'text' && (
                                <FormControl>
                                    <FormLabel>{item?.title} {item?.required && <span className='star'>*</span>} </FormLabel>
                                    <FormInput type='text' name={item?.name} placeholder={item?.placeholder} value={formDetails[item.name]} disabled />
                                </FormControl>
                            )}
                            {item.type === 'inlineFields' && (
                                <InlineFormFieldsContainer className='inline-container-form-group'>
                                    {item?.fields && item?.fields?.length ? (
                                        <>
                                            {item?.fields.map((itm) => (
                                                <FormControl>
                                                    <FormLabel>{itm?.title} {itm?.required && <span className='star'>*</span>} </FormLabel>
                                                    <FormInput type='text' name={itm?.name} placeholder={itm?.placeholder} value={formDetails[itm.name]} disabled />
                                                </FormControl>
                                            ))}
                                        </>
                                    ) : null}
                                </InlineFormFieldsContainer>
                            )}
                            {item.type === 'select' && (
                                <FormControl>
                                    <FormLabel>{item.title} {item?.required && <span className='star'>*</span>} </FormLabel>
                                    <FormSelect placeholder={item?.placeholder} name={item?.name} defaultValue={formDetails[item.name]} disabled>
                                        <FormSelectOption value={formDetails[item.name]}>{formDetails[item.name]}</FormSelectOption>
                                    </FormSelect>
                                </FormControl>
                            )}
                            {item.type === 'textarea' && (
                                <FormControl>
                                    <FormLabel>{item.title} {item?.required && <span className='star'>*</span>} </FormLabel>
                                    <FormTextArea placeholder={item.placeholder} value={formDetails[item.name]} cols={item.cols ? item.cols : 60} disabled rows={item.rows ? item.rows : 5} ></FormTextArea>
                                </FormControl>
                            )}
                        </>)
                        )}
                    </FormControlContainer>
                    <div className='form-button-container'>
                        <PrimaryButton title="Home" type="button" onClick={gotoHome} />
                    </div>
                </FormWrapper>
            ) : null}
        </PageWrapper>
    )
}

export default Thankyou;