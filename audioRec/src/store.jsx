import { configureStore } from '@reduxjs/toolkit';
import audioSlice from "./features/audioSlice";

const store = configureStore({
    reducer: {
        audio: audioSlice,
        // other reducers if you have them
    },
});

export default store;
