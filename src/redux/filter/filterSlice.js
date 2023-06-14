import { createSlice } from "@reduxjs/toolkit";
import { initialFilter } from "./initialFilter";

const filterSlice = createSlice({
  name: 'filter',
  initialState: initialFilter.filter, // Изменение здесь
  reducers: {
    filterActions: (_, { payload }) => payload,
  }
})

export const { filterActions } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;


// import { createSlice } from "@reduxjs/toolkit";
// import { initialFilter } from "./filter/initialFilter";

// const filterSlice = createSlice({
//     name: 'filter',
//     initialState: initialFilter,
//     reducers: {
//         filterActions: (_, {payload}) => {
//             return payload;
//         }
//     }
// })

// export const { filterActions } = filterSlice.actions;
// export const filterReducer = filterSlice.reducer;