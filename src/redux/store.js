import { configureStore } from '@reduxjs/toolkit';
import pollReducer from './pollSlice';
import adminReducer from './adminSlice';

export default configureStore({
    reducer: {
        polls: pollReducer,
        admin: adminReducer,
    }
})