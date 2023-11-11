import { configureStore } from "@reduxjs/toolkit";
import moviesSlice from "./moviesSlice";
import searchSlice from "./searchSlice";
import userSlice from "./userSlice";

const appStore = configureStore({
    reducer:{
        user: userSlice,
        movies: moviesSlice,
        search: searchSlice,
    }
})

export default appStore;