import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
    name: 'gpt',
    initialState: {
        showSearchBox: false
    },
    reducers: {
        toggleSearchContainer: (state, action) => {
            state.showSearchBox = !state.showSearchBox
        }
    }
})

export const {toggleSearchContainer} = gptSlice.actions;
export default gptSlice.reducer;