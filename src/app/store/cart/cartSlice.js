import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    cart: [],
  },
  reducers: {
    addToCart: (state, action) => {
      const itemInCart = state.cart.find(
        elem => elem.item.id === action.payload.item.id,
      );

      if (itemInCart) {
        itemInCart.quantity += 1;
      } else {
        state.cart.push({ ...action.payload, quantity: 1 });
      }
    },
    incrementQuantity: (state, action) => {
      const item = state.cart.find(elem => elem.id === action.payload.id);

      item.quantity += 1;
    },
    decrementQuantity: (state, action) => {
      const item = state.cart.find(element => element.id === action.payload.id);

      if (item.quantity === 1) {
        item.quantity = 1;
      } else {
        item.quantity -= 1;
      }
    },
    removeItem: (state, action) => {
      const removeItem = state.cart.filter(item => {
        return item.id !== action.payload.id;
      });

      // eslint-disable-next-line no-param-reassign
      state.cart = removeItem;
    },
  },
});

export const cartReducer = cartSlice.reducer;
export const { addToCart, incrementQuantity, decrementQuantity, removeItem } =
  cartSlice.actions;
