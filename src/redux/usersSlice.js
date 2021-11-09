import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: "users",
    initialState: { id: '123455', name: 'Rajneesh', email: 'raj@gmail.com', password: 'user123' },
    reducers: {
        matchAdmin: (state, action) => {

            state.map((item) => {
                if (item.id === action.payload.id && item.password === action.payload.password) {
                    return true
                } return null
            });
        },
    }
})
export default userSlice.reducer;