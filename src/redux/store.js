import { configureStore } from '@reduxjs/toolkit';
//import adminReducer from './adminSlice'
import pollReducer from './pollSlice';

export default configureStore({
    reducer: {
        pools: pollReducer,
    }
})