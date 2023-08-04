import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface ToggleViewState {
    view: "grid" | "list";
}

// Define the initial state using that type
const initialState: ToggleViewState = {
    view: "grid",
};

export const ToggleViewSlice = createSlice({
    name: "toggleView",
    initialState,
    reducers: {
        toggleView: (
            state: ToggleViewState,
            actions: PayloadAction<string>
        ) => {
            state.view = actions.payload as "grid" | "list";
        },
    },
});

export const { toggleView } = ToggleViewSlice.actions;

export default ToggleViewSlice.reducer;
