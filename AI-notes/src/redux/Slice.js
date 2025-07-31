// src/features/api/apiSlice.js
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// API slice banaye
export const apiSlice = createApi({
    reducerPath: 'api', // Redux store mein iska name
    baseQuery: fetchBaseQuery({ baseUrl: 'localhost/' }),
    tagTypes:['Post','User'],// Base URL for API
    endpoints: (builder) => ({
        // Query for fetching data
        getuser: builder.query({
            query: () => 'getitems',
            providesTags: ['Post']// Endpoint URL (e.g., https://api.example.com/todos)
        }),
        // Mutation for posting data
        addsetuser: builder.mutation({
            query: (User) => ({
                url: 'postitems',
                method: 'POST',
                body: User,
            }),
            invalidatesTags: ['Post']
        }),
    }),
});

// Generated hooks export karo
export const { useGetuser, useAdduser } = apiSlice;