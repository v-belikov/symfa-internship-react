import { configureStore } from '@reduxjs/toolkit';
import productsInCart from './products/cart-slice';
import { productsApi } from './products';

export const store = configureStore({
  reducer: {
    [productsApi.reducerPath]: productsApi.reducer,
    cart: productsInCart,
  },
  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware(),
    productsApi.middleware,
  ],
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
