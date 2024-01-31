import React, { useEffect, useRef } from 'react'
import { PageWrapper, UploadBoxWrapper, FileDetails } from "./home.styled";
import PrimaryButton from '../../components/buttons/primaryButton';
import { FaUpload } from "react-icons/fa";
import { MdClose } from "react-icons/md";
import { toast } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';
import useFileReader from '../../hooks/readfile.hook';
import { loadFileData, resetFileData } from '../../redux/slices/file.slice';
import { useNavigate } from 'react-router-dom';

const Home = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const fileUploader = useFileReader();
  const fileInputRef = useRef(null);
  const fileData = useSelector((state) => state.file.fileData);
  const fileDetails = useSelector((state) => state.file.fileDetails);

  const handleFileSelectClick = (e) => {
    e.preventDefault();
    if (!fileDetails) {
      fileInputRef.current.click();
    }
  }

  const handleFileOpen = async (e, type) => {
    e.preventDefault();
    const filesList = type === 'drop' ? e.dataTransfer.files : e.target.files;
    if (filesList?.length) {
      let currentFile = filesList[0];
      const ext = currentFile?.name?.split('.')[1];
      if (ext === 'txt' || ext === 'json') {
        const data = await fileUploader.readFile(currentFile, ext);
        dispatch(loadFileData({
          data,
          file: convertFileTypeToObject(currentFile)
        }))
      } else {
        toast.error("Invalid File Format");
      }
    }
  }

  const convertFileTypeToObject = (e) => {
    return {
      lastModified: e.lastModified,
      lastModifiedDate: new Date().toISOString(),
      name: e.name,
      size: e.size,
      type: e.type
    }
  }

  const handleRemoveFile = () => {
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
    dispatch(resetFileData())
  };

  const loadForm = () => {
    navigate('/app/forms');
  }

  return (
    <PageWrapper>
      <div className='title'>
        File Upload
      </div>
      <input ref={fileInputRef} type="file" onChange={(e) => handleFileOpen(e, 'fileInput')} className='file-input' data-testid="file-input-id" />
      <UploadBoxWrapper className='upload-wrapper' onClick={handleFileSelectClick} onDragOver={(e) => e.preventDefault()} onDrop={(e) => handleFileOpen(e, 'drop')} >
        {fileDetails ? (
          <FileDetails>
            <span className='file-name'>{fileDetails?.name}</span>
            <MdClose name="Close icon" size={18} onClick={handleRemoveFile} data-testid='close-btn-icon' />
          </FileDetails>
        ) : (
          <>
            <FaUpload className='upload-icon' />

            <div className='hr-line'></div>

            <span className='draggin-text'>
              Drop file here
            </span>
          </>
        )}
      </UploadBoxWrapper>
      <PrimaryButton title={"Load Form"} disabled={!fileData && !fileData?.length} onClick={loadForm} />
    </PageWrapper>
  )
}

export default Home