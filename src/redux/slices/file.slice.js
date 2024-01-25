import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const initialState = {
    fileData: null,
};

export const fileSlice = createSlice({
    name: "file",
    initialState,
    reducers: {
        loadFileData: (state, action) => {
            state.fileData = action.payload.data;
            toast.success("Data Loaded Successfully");
        },
        resetFileData: (state, action) => {
            state.fileData = null;
            toast.success("Data Removed Successfully");
        }
    }
});


export const { loadFileData, resetFileData } = fileSlice.actions;
export default fileSlice.reducer;