
import { createSlice } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const initialState = {
  contacts: {
    "id-1": { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
    "id-2": { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
    "id-3": { id: "id-3", name: "Eden Clements", number: "645-17-79" },
    "id-4": { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
  },
};
const contactSlice = createSlice({
  name: "contact",
  initialState,
  reducers: {
    addContact(state, action) {
      state.contacts.push(action.playload);
    },
    deleteContact(state, action) {
      state.contacts = state.contacts.filter(
        (contacts) => contacts.id !== action.playload
      );
    },
  },
});
export const { addContact, deleteContact } = contactSlice.actions;

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["value"],
};

export const contactReducer = persistReducer(
  persistConfig,
  contactSlice.reducer
);

// Слайс контактів
// У файлі contactsSlice.js оголоси слайс контактів, використовуючи функцію createSlice().
// Екшени слайса для використання в dispatch:
// addContact - додавання нового контакту до властивості items
// deleteContact - видалення контакту за id з властивості items
// Оголоси функції-селектори для використання в useSelector:
// selectContacts - повертає список контактів з властивості items.
// З файла слайса експортуй редюсер, а також його екшени і селектори.

// import { createSlice } from "@reduxjs/toolkit";

// const INITIAL_STATE = {
//   productData: null,
//   isLoading: false,
//   isError: false,
//   counter: 0,
//   contacts: [], // to homework example
// };

// const productDetailsSlice = createSlice({
//   // Ім'я слайсу
//   name: "productDetails",
//   // Початковий стан редюсера слайсу
//   initialState: INITIAL_STATE,
//   // Об'єкт редюсерів
//   reducers: {
//     incrementCounter(state) {
//       state.counter = state.counter + 1;
//     },
//     decrementCounter(state) {
//       state.counter = state.counter - 1;
//     },
//     setProductData(state, action) {
//       state.productData = action.payload;
//     },
//     setIsLoading(state, action) {
//       state.isLoading = action.payload;
//     },
//     setIsError(state, action) {
//       state.isError = action.payload;
//     },
//     addContact(state, action) {
//       state.contacts.push(action.payload); // 1
//     },
//     deleteContact(state, action) {
//       state.contacts = state.contacts.filter(
//         (contact) => contact.id !== action.payload
//       );
//     },
//   },
// });
