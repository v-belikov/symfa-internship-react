import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { BASE_QUERY } from '../models';

export const authApi = createApi({
  reducerPath: '',
  baseQuery: fetchBaseQuery({
    baseUrl: `${BASE_QUERY}`,
  }),
  endpoints: builder => ({
    registerUser: builder.mutation({
      query(data) {
        return {
          url: 'user',
          method: 'POST',
          body: data,
        };
      },
    }),
    getUser: builder.query({
      query: () => {
        return {
          url: `user`,
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
    loginUser: builder.mutation({
      query(data) {
        return {
          url: 'login',
          method: 'POST',
          body: data,
          credentials: 'include',
        };
      },
    }),
    logoutUser: builder.mutation<void, void>({
      query() {
        return {
          url: 'logout',
          credentials: 'include',
        };
      },
    }),
  }),
});

export const {
  useGetUsersQuery,
  useGetUserQuery,
  useLoginUserMutation,
  useRegisterUserMutation,
  useLogoutUserMutation,
} = authApi;
