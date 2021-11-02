import { createSlice } from "@reduxjs/toolkit";

const pollSlice = createSlice({
    name: "polls",
    initialState: [
        { name: 'Mobile', vote: '' },
        { name: 'Laptop', vote: '' },
    ],
})
export default pollSlice.reducer;