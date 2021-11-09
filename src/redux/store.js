import { configureStore } from '@reduxjs/toolkit';
import pollReducer from './pollSlice';
import adminReducer from './adminSlice';
import userReducer from './usersSlice';

export default configureStore({
    reducer: {
        polls: pollReducer,
        admin: adminReducer,
        users: userReducer,
    }
})