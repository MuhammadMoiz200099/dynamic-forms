import React, { useEffect, useState } from 'react';
import { PageWrapper, FormWrapper, FormControl, FormControlContainer, FormLabel, FormInput, InlineFormFieldsContainer, FormSelect, FormSelectOption, FormTextArea } from "./forms.styled";
import PrimaryButton from '../../components/buttons/primaryButton';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { resetFileData, submitFormData } from '../../redux/slices/file.slice';

const Forms = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const fileData = useSelector((state) => state.file.fileData);
  const [data, setData] = useState();
  const [formFields, setFormFields] = useState({});

  const handleOnSubmit = (e) => {
    e.preventDefault();
    dispatch(submitFormData({
      data: formFields
    }))
    navigate('/app/thankyou');
  }

  const handleOnChange = (e) => {
    let obj = {
      [e.target.name]: e.target.value
    }
    setFormFields((prev) => ({ ...prev, ...obj }))
  }

  useEffect(() => {
    if (fileData && fileData?.length) {
      setData(fileData);
      fileData.forEach((d) => {
        if (d.type === 'inlineFields') {
          d.fields.forEach((e) => {
            setFormFields((prev) => ({ ...prev, [e.name]: '' }))
          })
        } else {
          setFormFields((prev) => ({ ...prev, [d.name]: '' }))
        }
      })

    }
  }, [fileData])


  useEffect(() => {
    if (!fileData && !fileData?.length) {
      navigate('/app/home');
      dispatch(resetFileData())
    }
  }, [])

  return (
    <PageWrapper>
      <div className='title'>My Form</div>
      {data && data?.length ? (
        <FormWrapper className='my-form' onSubmit={handleOnSubmit}>
          <FormControlContainer className='form-container'>
            {data.map((item) => (<>
              {item.type === 'text' && (
                <FormControl>
                  <FormLabel>{item?.title} {item?.required && <span className='star'>*</span>} </FormLabel>
                  <FormInput type='text' name={item?.name} placeholder={item?.placeholder} required={item?.required ? true : false} onChange={handleOnChange} />
                </FormControl>
              )}
              {item.type === 'inlineFields' && (
                <InlineFormFieldsContainer className='inline-container-form-group'>
                  {item?.fields && item?.fields?.length ? (
                    <>
                      {item?.fields.map((itm) => (
                        <FormControl>
                          <FormLabel>{itm?.title} {itm?.required && <span className='star'>*</span>} </FormLabel>
                          <FormInput type='text' name={itm?.name} placeholder={itm?.placeholder} required={itm?.required ? true : false} onChange={handleOnChange} />
                        </FormControl>
                      ))}
                    </>
                  ) : null}
                </InlineFormFieldsContainer>
              )}
              {item.type === 'select' && (
                <FormControl>
                  <FormLabel>{item.title} {item?.required && <span className='star'>*</span>} </FormLabel>
                  <FormSelect placeholder={item?.placeholder} name={item?.name} onChange={handleOnChange}>
                    {item?.placeholder && (<FormSelectOption value="">{item?.placeholder}</FormSelectOption>)}
                    {item?.options && item?.options?.length ? (
                      <>
                        {item.options.map((option) => (
                          <FormSelectOption value={option}>{option}</FormSelectOption>
                        ))}
                      </>
                    ) : null}
                  </FormSelect>
                </FormControl>
              )}
              {item.type === 'textarea' && (
                <FormControl>
                  <FormLabel>{item.title} {item?.required && <span className='star'>*</span>} </FormLabel>
                  <FormTextArea placeholder={item.placeholder} name={item?.name} required={item?.required ? true : false} onChange={handleOnChange} cols={item.cols ? item.cols : 60} rows={item.rows ? item.rows : 5} ></FormTextArea>
                </FormControl>
              )}
            </>)
            )}
          </FormControlContainer>
          <div className='form-button-container'>
            <PrimaryButton title="Submit" type="submit" />
          </div>
        </FormWrapper>
      ) : null}
    </PageWrapper>
  )
}

export default Forms