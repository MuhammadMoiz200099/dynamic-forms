import React from 'react'
import { PageWrapper, UploadBoxWrapper } from "./home.styled";
import PrimaryButton from '../../components/buttons/primaryButton';
import { FaUpload } from "react-icons/fa";


const Home = () => {


  return (
    <PageWrapper>
      <div className='title'>
        File Upload
      </div>
      <UploadBoxWrapper className='upload-wrapper'>
        <FaUpload className='upload-icon' />

        <div className='hr-line'></div>

        <span className='draggin-text'>
          Drop file here
        </span>
      </UploadBoxWrapper>
      <PrimaryButton title={"Load Form"} disabled={false} />
    </PageWrapper>
  )
}

export default Home