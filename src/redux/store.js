import { configureStore } from "@reduxjs/toolkit";
import { contactsApi } from "./contactsAPI";

export const store = configureStore({
    reducer:{
        contacts: contactsApi.reducer,
    },
    middleware: (getDefaultMiddleware) => 
        [...getDefaultMiddleware(), contactsApi.middleware],
  });


