import { configureStore } from "@reduxjs/toolkit";
import { contactsSlice } from "./contactsSlice";
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
  } from 'redux-persist'
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'contacts',
  storage,
}

const persistedContactsReducer = persistReducer(
    persistConfig,
    contactsSlice.reducer
);



export const store = configureStore({
    reducer:{
        contacts: persistedContactsReducer,
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);

