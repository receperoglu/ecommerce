import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "./slices/productsSlice";
import filterReducer from "./slices/filterSlice";
import cartReducer from "./slices/cartSlice";



import { useDispatch } from "react-redux";


export const store = configureStore({
  reducer: {
    products: productsReducer,
    filters: filterReducer,
    cart: cartReducer,
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const useAppDispatch = () => useDispatch<AppDispatch>()