import { createSlice } from "@reduxjs/toolkit";

const adminSlice = createSlice({
    name: "admin",
    initialState: [{ name: 'admin', password: 'admin123' }],
    reducers: {
        matchAdmin: (state, action) => {

            state.map((item) => {
                if (item.name === action.payload.id && item.password === action.payload.password) {
                    item.name = action.payload.name;
                } return null
            });
        },
    }
})
export default adminSlice.reducer;