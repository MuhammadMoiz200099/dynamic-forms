import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const initialState = {
    fileData: null,
    fileDetails: null,
    submitData: null,
};

export const fileSlice = createSlice({
    name: "file",
    initialState,
    reducers: {
        loadFileData: (state, action) => {
            state.fileData = action.payload.data;
            state.fileDetails = action.payload.file;
            toast.success("Data Loaded Successfully");
        },
        submitFormData: (state, action) => {
            state.submitData = action.payload.data;
        },
        resetFileData: (state, action) => {
            state.fileData = null;
            state.fileDetails = null;
            state.submitData = null;
            toast.success("Data Removed Successfully");
        }
    }
});


export const { loadFileData, submitFormData, resetFileData } = fileSlice.actions;
export default fileSlice.reducer;