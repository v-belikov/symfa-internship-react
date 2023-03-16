import { createSlice } from '@reduxjs/toolkit';
import { ICartProduct } from './iproduct';

const decrement = (value: number): number => {
  if (value === 1) {
    return value;
  }

  return value - 1;
};

interface ICartState {
  cart: ICartProduct[];
}

const initialState: ICartState = {
  cart: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const itemInCart = state.cart.find(elem => {
        return elem.item.id === action.payload.item.id;
      });

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

      state.cart[index] = {
        ...state.cart[index],
        quantity: state.cart[index].quantity + 1,
      };
    },
    decrementQuantity: (state, action) => {
      const index = state.cart.findIndex(element => {
        return element.item.id === action.payload;
      });

      state.cart[index] = {
        ...state.cart[index],
        quantity: decrement(state.cart[index].quantity),
      };
    },
    removeItem: (state, action) => {
      state.cart = state.cart.filter(item => {
        return item.item.id !== action.payload;
      });
    },
  },
});

export const cartReducer = cartSlice.reducer;
export const { addToCart, incrementQuantity, decrementQuantity, removeItem } =
  cartSlice.actions;
