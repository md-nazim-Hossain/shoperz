import { Product } from "@/types";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface ToggleWishState {
    wishListProduct: Product[];
    compareListProduct: Product[];
}

// Define the initial state using that type
const initialState: ToggleWishState = {
    wishListProduct: [],
    compareListProduct: [],
};

export const ToggleAddListProductSlice = createSlice({
    name: "toggleWishList",
    initialState,
    reducers: {
        toggleWishList: (
            state: ToggleWishState,
            actions: PayloadAction<Product>
        ) => {
            const product = state.wishListProduct.length;
            if (product) {
                const isExist = state.wishListProduct.find(
                    item => item.id === actions.payload.id
                );
                if (isExist) {
                    state.wishListProduct = state.wishListProduct.filter(
                        item => item.id !== actions.payload.id
                    );
                } else {
                    state.wishListProduct.push(actions.payload);
                }
            } else {
                state.wishListProduct.push(actions.payload);
            }
        },
        toggleCompareList: (
            state: ToggleWishState,
            actions: PayloadAction<Product>
        ) => {
            const product = state.compareListProduct.length;
            if (product) {
                const isExist = state.compareListProduct.find(
                    item => item.id === actions.payload.id
                );
                if (isExist) {
                    state.compareListProduct = state.compareListProduct.filter(
                        item => item.id !== actions.payload.id
                    );
                } else {
                    state.compareListProduct.push(actions.payload);
                }
            } else {
                state.compareListProduct.push(actions.payload);
            }
        },
    },
});

export const { toggleWishList, toggleCompareList } =
    ToggleAddListProductSlice.actions;

export default ToggleAddListProductSlice.reducer;
