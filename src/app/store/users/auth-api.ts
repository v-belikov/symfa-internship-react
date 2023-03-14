import { createApi } from '@reduxjs/toolkit/query/react';
import { BASE_QUERY } from '../models';

export const authApi = createApi({
  reducerPath: 'auth/login',
  baseQuery: BASE_QUERY,
  endpoints: builder => ({
    loginUser: builder.mutation({
      query(data) {
        return {
          url: 'auth/login',
          method: 'POST',
          body: data,
        };
      },
    }),
    getUser: builder.query({
      query: () => {
        return {
          url: `profile`,
          method: 'GET',
        };
      },
    }),
    getUsers: builder.query({
      query: () => {
        return {
          url: `users`,
          method: `GET`,
        };
      },
    }),
    createUser: builder.mutation({
      query(data) {
        return {
          url: 'register',
          method: 'POST',
          body: data,
        };
      },
    }),
    updateUser: builder.mutation({
      query(data) {
        return {
          url: 'update',
          method: 'PUT',
          body: data,
        };
      },
    }),
    removeUser: builder.mutation({
      query(data) {
        return {
          url: 'remove',
          method: 'DELETE',
          body: data,
        };
      },
    }),
  }),
});

export const {
  useLoginUserMutation,
  useGetUserQuery,
  useGetUsersQuery,
  useCreateUserMutation,
  useUpdateUserMutation,
  useRemoveUserMutation,
} = authApi;
