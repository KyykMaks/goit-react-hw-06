import { createSlice } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";


const initialState = '';

const filterSlice = createSlice({
    name: 'filter',
    initialState:initialState,
    reducers: {
     filterNumber( state, action) {
 state.filterNumber = action.payload;
     }
    }
})

export const {filterNumber} = filterSlice.actions;
const persistConfig = {
    key: "root",
    storage,
    whitelist: ["filterNumber"],
  };
export const filtersReducer = persistReducer(
    persistConfig,
    filterSlice.reducer
)


