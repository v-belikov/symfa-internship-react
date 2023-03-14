import { createApi } from '@reduxjs/toolkit/query/react';
import { BASE_QUERY } from '../models';

export const authApi = createApi({
  reducerPath: 'user',
  baseQuery: BASE_QUERY,
  endpoints: builder => ({
    registerUser: builder.mutation({
      query(data) {
        return {
          url: 'user',
          method: 'POST',
          body: data,
          // withCredentials: true,
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
