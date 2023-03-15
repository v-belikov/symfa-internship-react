import { createApi } from '@reduxjs/toolkit/query/react';
import { BASE_QUERY } from '../models';

export const authApi = createApi({
  reducerPath: 'auth',
  baseQuery: BASE_QUERY,
  endpoints: builder => ({
    login: builder.mutation({
      query(data) {
        return {
          url: 'auth/login',
          method: 'POST',
          body: data,
        };
      },
    }),
    registration: builder.mutation({
      query(data) {
        return {
          url: 'registration',
          method: 'POST',
          body: data,
        };
      },
    }),
    update: builder.mutation({
      query(data) {
        return {
          url: 'update',
          method: 'PUT',
          body: data,
        };
      },
    }),
    delete: builder.mutation({
      query(data) {
        return {
          url: 'delete',
          method: 'DELETE',
          body: data,
        };
      },
    }),
    getAllUsers: builder.query({
      query: () => {
        return {
          url: 'admin/users/all',
          method: 'GET',
        };
      },
    }),
  }),
});

export const {
  useLoginMutation,
  useRegistrationMutation,
  useUpdateMutation,
  useDeleteMutation,
  useGetAllUsersQuery,
} = authApi;
