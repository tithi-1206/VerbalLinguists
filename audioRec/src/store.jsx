import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import audioSlice from "./features/audioSlice";
import thunk from 'redux-thunk'; // Import Redux Thunk middleware

const store = configureStore({
    reducer: {
        audio: audioSlice,
        // other reducers if you have them
    },
    middleware: [thunk, ...getDefaultMiddleware()],
});

export default store;
