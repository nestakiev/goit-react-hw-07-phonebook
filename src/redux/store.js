import { configureStore } from "@reduxjs/toolkit";
import { contactsApi } from "./contactsAPI";
import { filterSlice } from "./filterSlice";

export const store = configureStore({
    reducer:{
        contacts: contactsApi.reducer,
        filter: filterSlice.reducer,
    },
    middleware: (getDefaultMiddleware) => 
        [...getDefaultMiddleware(), contactsApi.middleware],
  });


