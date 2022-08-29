import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const userApi = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:8080' }),
  tagTypes: ['Users'],
  endpoints: builder => ({
    getUsers: builder.query({
      query: () => '/api/users',
      //transformResponse: res => res.sort((a, b) => b.id - a.id),
      providesTags: ['Users'],
    }),
    addUser: builder.mutation({
      query: user => ({
        url: '/api/users',
        method: 'POST',
        body: user,
      }),
      invalidatesTags: ['Users'],
    }),
    updateUser: builder.mutation({
      query: user => ({
        url: `/api/users/${user.id}`,
        method: 'PATCH',
        body: user,
      }),
      invalidatesTags: ['Users'],
    }),
    deleteUser: builder.mutation({
      query: id => ({
        url: `/api/users/${id}`,
        method: 'DELETE',
        body: id,
      }),
      invalidatesTags: ['Users'],
    }),
  }),
});

export const { useGetUsersQuery, useAddUserMutation, useUpdateUserMutation, useDeleteUserMutation } = userApi;
