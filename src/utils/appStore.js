import { configureStore } from "@reduxjs/toolkit";
import congifSlice from "./congifSlice";
import moviesSlice from "./moviesSlice";
import searchSlice from "./searchSlice";
import userSlice from "./userSlice";

const appStore = configureStore({
    reducer:{
        user: userSlice,
        movies: moviesSlice,
        search: searchSlice,
        config: congifSlice
    }
})

export default appStore;