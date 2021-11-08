import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: "users",
    initialState: [{ name: 'Rajneesh', email: 'raj@gmail.com', password: 'admin123' }],
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
export default userSlice.reducer;