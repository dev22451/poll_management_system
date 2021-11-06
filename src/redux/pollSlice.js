import { createSlice } from "@reduxjs/toolkit";

const pollSlice = createSlice({
    name: "polls",
    initialState: [{ title: 'Rajneesh', options: [{ id: '123', name: 'car', vote: 0 }, { id: "122", name: 'bike', vote: 0 }] },
    { title: 'Give a Vote', options: [{ id: '12', name: 'Bjp', vote: 0 }, { id: "13", name: 'cong', vote: 0 }] }
    ],
    reducers: {
        addPoll: (state, action) => {
            const newTodo =
            {
                id: new Date().getTime().toString(),
                name: action.payload.name,
                vote: 0
            };
            state.push(newTodo);
        },
        addVote: (state, action) => {
            const Data = state.map((item) => {

                return item.options

            });
            Data.map((list) => {
                if (list.id === action.payload.id) {
                    list.vote = action.payload.vote;
                }
            })





        }
    }
})
export const { addPoll, addVote } = pollSlice.actions;
export default pollSlice.reducer;