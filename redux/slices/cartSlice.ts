import { data, reduxitems } from "@/Types/type";
import {
  createSlice,
  PayloadAction,
} from "@reduxjs/toolkit";

const initialState: reduxitems = {
  items: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (
      state,
      action: PayloadAction<data>,
    ) => {
      state.items.push(action.payload);
    },
    clearCart: (state) => {
      state.items = [];
    },
  },
});

export const { addToCart, clearCart } =
  cartSlice.actions;
export default cartSlice.reducer;
