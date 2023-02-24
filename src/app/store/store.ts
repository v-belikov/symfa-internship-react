import { configureStore } from '@reduxjs/toolkit';
import { cartReducer } from './cart';
import { productsApi } from './products';
import { sizesReducer } from './sizes';

export const store = configureStore({
  reducer: {
    [productsApi.reducerPath]: productsApi.reducer,
    cart: cartReducer,
    sizes: sizesReducer,
  },
  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware(),
    productsApi.middleware,
  ],
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
