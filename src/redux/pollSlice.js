import { createSlice } from "@reduxjs/toolkit";

const pollSlice = createSlice({
    name: "polls",
    initialState: {
        pollList: [
            {
                id: '111',
                title: 'Rajneesh',
                options: [
                    {
                        id: '123',
                        name: 'car',
                        vote: 0
                    },
                    {
                        id: "122",
                        name: 'bike',
                        vote: 0
                    }],
                total: 0
            },
            {
                id: '112',
                title: 'Give a Vote',
                options: [
                    { id: '12', name: 'Bjp', vote: 0 },
                    { id: "13", name: 'cong', vote: 0 }
                ],
                total: 0
            },
            {
                id: '112',
                title: 'Give a Vote',
                options: [
                    { id: '12', name: 'Bjp', vote: 0 },
                    { id: "13", name: 'cong', vote: 0 }
                ],
                total: 0
            },
            {
                id: '112',
                title: 'Give a Vote',
                options: [
                    { id: '12', name: 'Bjp', vote: 0 },
                    { id: "13", name: 'cong', vote: 0 }
                ],
                total: 0
            },
        ],
    },
    reducers: {
        addPoll: (state, action) => {
            const newTodo =
            {
                id: new Date().getTime().toString(),
                name: action.payload.name,
                vote: 0
            };
            state.pollList.push(newTodo);
        },
        addVote: (state, action) => {
            state.pollList = state.pollList.map((item) => {
                if (item.id === action.payload.pollId) {
                    item.options = item.options.map((instance) => {
                        if (instance.id === action.payload.optionId) {
                            instance = { ...instance, vote: instance.vote + 1 }
                        }
                        return instance;
                    });
                    item.total = item.total + 1
                }
                return item
            });
        }
    }
})
export const { addPoll, addVote } = pollSlice.actions;
export default pollSlice.reducer;