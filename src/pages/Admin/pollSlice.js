import { createSlice } from "@reduxjs/toolkit";

const pollSlice = createSlice({
    name: "polls",
    initialState: [{ id: '12', name: "car", vote: 0 }, { id: '13', name: "bike", vote: 0 }, { id: '14', name: "bus", vote: 0 }],
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