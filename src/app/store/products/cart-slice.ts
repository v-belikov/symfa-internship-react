import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from 'app/store';
import { Product } from './models';

export const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    productsInCart: [] as Product[],
  },
  reducers: {
    setCartProducts: (state, action: PayloadAction<Product>) => {
      const productInCart = state.productsInCart.find(
        item => item.id === action.payload.id,
      );

      if (productInCart) {
        productInCart.amount += 1;
      } else {
        state.productsInCart.push({
          ...action.payload,
          amount: 1,
        });
      }
    },
    removeQuantityCartProduct: (state, action: PayloadAction<Product>) => {
      if (action.payload.amount === 1) {
        state.productsInCart.splice(
          state.productsInCart.indexOf(action.payload) - 1,
          1,
        );
      } else {
        for (const product of state.productsInCart) {
          if (product.id === action.payload.id) {
            product.amount -= 1;

            break;
          }
        }
      }
    },
    dropProductFromCart: (state, action: PayloadAction<Product>) => {
      state.productsInCart.splice(
        state.productsInCart.indexOf(action.payload) - 1,
        1,
      );
    },
  },
});

export const getProductsInCart = (state: RootState) =>
  state.cart.productsInCart;

export const {
  dropProductFromCart,
  removeQuantityCartProduct,
  setCartProducts,
} = cartSlice.actions;

export const cartReducer = cartSlice.reducer;
