import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// const baseQuery = fetchBaseQuery({
//   baseUrl: '/',
//   prepareHeaders: (headers, { getState }) => {
//     const token = getState().auth.token;
//     console.log('tokennnn', token);
//     if (token) {
//       headers.set('authorization', `Bearer ${token}`);
//     }

//     return headers;
//   },
// });

export const contactApi = createApi({
  reducerPath: 'contactApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://connections-api.herokuapp.com',
  }),
  tagTypes: ['contact'],
  endpoints: builder => ({
    fetchContacts: builder.query({
      query: () => '/contacts',
      providesTags: ['contact'],
    }),

    DeleteContact: builder.mutation({
      query: ContactId => ({
        url: `/contacts/${ContactId}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['contact'],
    }),

    CreateContact: builder.mutation({
      query: ({ name, number }) => ({
        url: '/contacts',
        method: 'POST',
        body: {
          name,
          number,
        },
      }),
      invalidatesTags: ['contact'],
    }),
  }),
});

export const {
  useFetchContactsQuery,
  useDeleteContactMutation,
  useCreateContactMutation,
} = contactApi;
