import { createSlice } from "@reduxjs/toolkit";
import { initialFilter } from "./initialFilter";

const filterSlice = createSlice({
  name: 'filter',
  initialState: initialFilter.filter,
  reducers: {
    filterActions: (_, { payload }) => payload,
  }
})

export const { filterActions } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;