import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import ToggleViewSlice from "./slices/ToggleViewSlice";
import ToggleAddListProductSlice from "./slices/ToggleAddListProductSlice";
const store = configureStore({
    reducer: {
        view: ToggleViewSlice,
        toggleAddProductList: ToggleAddListProductSlice,
    },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export default store;
