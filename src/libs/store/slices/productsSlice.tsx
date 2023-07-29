import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Product } from "../../../Models/Product";

interface ProductsState {
  data: Product[];
  originalData: Product[];
  loading: boolean;
  error: string | null;
}

export const fetchProductsAsync = createAsyncThunk(
  "products/fetchProducts",
  async (_, { getState }) => {
    const { products } = getState() as { products: ProductsState };
    try {
      const originalData = await fetch(
        "https://fakestoreapi.com/products"
      ).then((res) => res.json());

      let data = originalData;

      return { originalData, data };
    } catch (error) {
      throw error;
    }
  }
);

const initialState: ProductsState = {
  data: [],
  originalData: [],
  loading: false,
  error: null,
};

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    resetMeta: (state) => {
      state.data = [...state.originalData]; // Reset the data to the originalData
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchProductsAsync.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchProductsAsync.fulfilled, (state, action) => {
      state.data = action.payload.data;
      state.originalData = action.payload.originalData;
      state.loading = false;
    });
    builder.addCase(fetchProductsAsync.rejected, (state) => {
      state.loading = false;
      state.error = "Failed to fetch products.";
    });
  },
});

export const { resetMeta } = productsSlice.actions;
export default productsSlice.reducer;
