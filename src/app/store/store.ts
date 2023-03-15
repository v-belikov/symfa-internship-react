import { configureStore } from '@reduxjs/toolkit';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { authApi, userReducer } from './auth';
import { cartReducer } from './cart';
import { productsApi } from './products';
import { sizesReducer } from './sizes';

const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, userReducer);

export const store = configureStore({
  reducer: {
    [productsApi.reducerPath]: productsApi.reducer,
    cart: cartReducer,
    sizes: sizesReducer,
    [authApi.reducerPath]: authApi.reducer,
    user: persistedReducer,
  },
  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware({ serializableCheck: false }),
    productsApi.middleware,
    authApi.middleware,
  ],
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
