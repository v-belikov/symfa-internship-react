import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import * as qs from 'qs';

const baseQuery = fetchBaseQuery({
  baseUrl: 'http://localhost:9040/',
  paramsSerializer: params => qs.stringify(params, { arrayFormat: 'brackets' }),
});

export const productsApi = createApi({
  reducerPath: 'products',
  baseQuery,
  endpoints: builder => ({
    getProducts: builder.query({
      query: params => ({
        url: 'products',
        params,
      }),
    }),
  }),
});

export const { useGetProductsQuery } = productsApi;
