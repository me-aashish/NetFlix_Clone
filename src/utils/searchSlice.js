import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
    name: "search",
    initialState: {
        isSearchContainerVisible: false,
    },
    reducers: {
        toogleSearchContainer: (state) => {
            state.isSearchContainerVisible = !state.isSearchContainerVisible;
        }
    }
})


export const { toogleSearchContainer } = searchSlice.actions;
export default searchSlice.reducer;