import { createSlice, PayloadAction } from "@reduxjs/toolkit";


interface SelectedFilters {
  [key: string]: string | string[];
}

interface FilterState {
  selectedFilters: SelectedFilters;
  searchValue: string;
}



export const filterSlice = createSlice({
  name: "filters",
  initialState: { selectedFilters: {}, searchValue: "" } as FilterState,
  reducers: {

    updateSearch: (state, action: PayloadAction<string>) => {
      state.searchValue = action.payload;
    },
    resetFilter: (state) => {
      state.selectedFilters = {};
    },
  },
});



export const { updateSearch, resetFilter } = filterSlice.actions;
export default filterSlice.reducer;
