import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import * as qs from 'qs';
import { config } from '../../core/config';

const baseQuery = fetchBaseQuery({
  baseUrl: config.API_URL,
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
