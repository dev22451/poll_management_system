import { createSlice } from "@reduxjs/toolkit";

const pollSlice = createSlice({
    name: "polls",
    initialState: [],
    reducers: {
        addPoll: (state, action) => {
            const newTodo = {
                id: new Date().getTime().toString(),
                name: action.payload.name,
                vote: 0
            };
            state.push(newTodo);

        }
    }
})
export const { addPoll } = pollSlice.actions;
export default pollSlice.reducer;