import { createSlice } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";


const initialState = { filter: '' };

const filterSlice = createSlice({
    name: 'filter',
    initialState:initialState,
    reducers: {
     filter(state, action) {
     state.filter = action.payload;
     }
    }
})

export const {filter} = filterSlice.actions;
const persistConfig = {
    key: "root",
    storage,
    whitelist: ["filter"],
  };
export const filtersReducer = persistReducer(
    persistConfig,
    filterSlice.reducer
)