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
  }),
});

export const { useLoginUserMutation, useGetUserQuery } = authApi;
