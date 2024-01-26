import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const initialState = {
    fileData: null,
    fileDetails: null,
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
        resetFileData: (state, action) => {
            state.fileData = null;
            state.fileDetails = null;
            toast.success("Data Removed Successfully");
        }
    }
});


export const { loadFileData, resetFileData } = fileSlice.actions;
export default fileSlice.reducer;