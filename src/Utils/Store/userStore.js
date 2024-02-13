import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../Slice/userSlice"
import moviesReducer from "../Slice/moviesSlice"

const userStore = configureStore({
    reducer: {
        user: userReducer,
        movies: moviesReducer
    }
})

export default userStore;