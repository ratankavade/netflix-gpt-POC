import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../Slice/userSlice"
import moviesReducer from "../Slice/moviesSlice"
import gptReducer from '../Slice/gptSlice'

const userStore = configureStore({
    reducer: {
        user: userReducer,
        movies: moviesReducer,
        gpt: gptReducer
    }
})

export default userStore;