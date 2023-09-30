import {createSlice} from "@reduxjs/toolkit";

const audioSlice = createSlice({
    name: 'audio',
    initialState: {
        originalAudio: null,
        englishAudio: null,
        regionalText: null,
        englishText: null,
    },
    reducers: {
        setOriginalAudio: (state, action) => {
            // console.log(state)
            console.log(action)
            state.originalAudio = action.payload;
        },
        setEnglishAudio: (state, action) => {
            state.englishAudio = action.payload;
        },
        setRegionalText: (state, action) => {
            state.regionalText = action.payload;
        },
        setEnglishText: (state, action) => {
            state.englishText = action.payload;
        },
    },
});

export const {
    setOriginalAudio,
    setEnglishAudio,
    setRegionalText,
    setEnglishText,
} = audioSlice.actions;

export const selectAudioData = (state) => state.audio;

export default audioSlice.reducer;
