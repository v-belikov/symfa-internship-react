import { configureStore } from '@reduxjs/toolkit';
import { authApi } from './users/auth-api';
import { basketReducer } from './basket';
import { productsApi } from './products';

export const store = configureStore({
  reducer: {
    [productsApi.reducerPath]: productsApi.reducer,
    [authApi.reducerPath]: authApi.reducer,
    basket: basketReducer,
  },
  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware(),
    productsApi.middleware,
    authApi.middleware,
  ],
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
