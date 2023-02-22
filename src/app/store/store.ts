import { configureStore } from '@reduxjs/toolkit';
import { cartReducer } from './cart/cartSlice';
import { productsApi } from './products';

export const store = configureStore({
  reducer: {
    [productsApi.reducerPath]: productsApi.reducer,
    cart: cartReducer,
  },
  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware(),
    productsApi.middleware,
  ],
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
