import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const contactsApi = createApi({
    reducerPath: 'contacts',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://630270c79eb72a839d6fb56b.mockapi.io/api/v1/',
    }),
    tagTypes: ['Contacts'],
    endpoints: builder => ({
        getContacts: builder.query({
            query: () => 'contacts',
            providesTags: ['Contacts'],
        }),
        addContact: builder.mutation({
            query: value => ({
                url: 'contacts',
                method: "POST",
                body: value,
            }),
            invalidatesTags: ['Contacts'],
        }),
        deleteContact: builder.mutation({
           query: id => ({
                url: `contacts/${id}`,
                method: 'DELETE',
           }),
           invalidatesTags: ['Contacts'],
        })
    }),
});

export const { useGetContactsQuery, useAddContactMutation, useDeleteContactMutation } = contactsApi;