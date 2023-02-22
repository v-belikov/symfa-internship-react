import { createSlice } from '@reduxjs/toolkit';

const decrement = value => {
  if (value === 1) {
    return value;
  }

  return value - 1;
};

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
      const index = state.cart.findIndex(
        elem => elem.item.id === action.payload,
      );

      // eslint-disable-next-line no-param-reassign
      state.cart[index] = {
        ...state.cart[index],
        quantity: state.cart[index].quantity + 1,
      };
    },
    decrementQuantity: (state, action) => {
      const index = state.cart.findIndex(element => {
        return element.item.id === action.payload;
      });

      // eslint-disable-next-line no-param-reassign
      state.cart[index] = {
        ...state.cart[index],
        quantity: decrement(state.cart[index].quantity),
      };
    },
    removeItem: (state, action) => {
      const removeItem = state.cart.filter(item => {
        return item.item.id !== action.payload;
      });

      // eslint-disable-next-line no-param-reassign
      state.cart = removeItem;
    },
  },
});

export const cartReducer = cartSlice.reducer;
export const { addToCart, incrementQuantity, decrementQuantity, removeItem } =
  cartSlice.actions;
