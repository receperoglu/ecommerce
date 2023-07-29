import { createSelector, createSlice, PayloadAction } from "@reduxjs/toolkit";

interface LineItem {
  id: number;
  name: string;
  price: string;
  quantity: number;
}

interface CartState {
  data: LineItem[];
}

export const cartSlice = createSlice({
  name: "cart",
  initialState: { data: [] } as CartState,
  reducers: {
    addToCart: (state, action: PayloadAction<LineItem>) => {
      const current = state.data.find(
        (lineItem) => lineItem.id === action.payload.id
      );

      if (current) {
        current.quantity++;
      } else {
        state.data.push({ ...action.payload, quantity: 1 });
      }
    },
    increaseQuantity: (state, action: PayloadAction<number>) => {
      const current = state.data.find(
        (lineItem) => lineItem.id === action.payload
      );

      if (current) {
        current.quantity++;
      }
    },
    decreaseQuantity: (state, action: PayloadAction<number>) => {
      const current = state.data.find(
        (lineItem) => lineItem.id === action.payload
      );

      if (current && current.quantity > 1) {
        current.quantity--;
      }
    },
    removefromCart: (state, action: PayloadAction<number>) => {
      state.data = state.data.filter((lineItem) => lineItem.id !== action.payload);
    },
    resetCart: (state) => {
      state.data = [];
    },
  },
});

export const totalPriceSelector = createSelector(
  (state: { cart: CartState }) => state.cart.data,
  (data) => {
    const totalPrice = data.reduce(
      (acc, cur) => acc + Number(cur.price) * cur.quantity,
      0
    );
    return totalPrice;
  }
);

export const {
  addToCart,
  increaseQuantity,
  decreaseQuantity,
  removefromCart,
  resetCart,
} = cartSlice.actions;
export default cartSlice.reducer;
