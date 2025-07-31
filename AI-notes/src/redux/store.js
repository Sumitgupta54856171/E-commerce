// src/app/store.js
import { configureStore } from '@reduxjs/toolkit';
import {apiSlice} from "./Slice.js";

export const store = configureStore({
    reducer: {
        [apiSlice.reducerPath]: apiSlice.reducer, // API reducer add kiya
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(apiSlice.middleware), // API middleware add kiya
});

