import { configureStore, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store';

export interface GoodPropsType {
  id: number;
  title: string;
  price: number;
  currencyFormat: string;
  availableSizes: Array<string>;
  sku: number;
  currencyId: string;
  description: string;
  installments: number;
  isFreeShipping: boolean;
  style: string;
}

export interface InitialStateType extends GoodPropsType {
  quantity: number;
}

interface BasketType {
  basket: InitialStateType[];
}

const initialState: BasketType = {
  basket: [],
};

const counterSlice = createSlice({
  name: 'basket',
  initialState,
  reducers: {
    addToBasket: (state, action) => {
      const currentGoods = state.basket.find(
        ({ ...item }: InitialStateType) => {
          return item.id === action.payload.id;
        },
      );

      if (currentGoods) {
        currentGoods.quantity += 1;
      } else {
        state.basket.push({ ...action.payload, quantity: 1 });
      }
    },

    // changeQuantity: (state: RootState, currentGoods: number, step: number) => {
    //   state.basket[currentGoods] = {
    //     ...state.basket[currentGoods],
    //     quantity: state.basket[currentGoods].quantity + step,
    //   };
    // },

    increaseQuantity: (state, action) => {
      const currentGoods = state.basket.findIndex(
        ({ ...item }: InitialStateType) => item.id === action.payload,
      );

      // eslint-disable-next-line no-param-reassign
      state.basket[currentGoods] = {
        ...state.basket[currentGoods],

        quantity: state.basket[currentGoods].quantity + 1,
      };
    },

    decreaseQuantity: (state, action) => {
      const currentGoods = state.basket.findIndex(
        ({ ...item }: InitialStateType) => item.id === action.payload,
      );

      // eslint-disable-next-line no-param-reassign
      state.basket[currentGoods] = {
        ...state.basket[currentGoods],
        quantity: state.basket[currentGoods].quantity - 1,
      };
    },

    removeGoods: (state, action) => {
      // eslint-disable-next-line no-param-reassign
      state.basket = state.basket.filter(({ ...item }: InitialStateType) => {
        return item.id !== action.payload;
      });
    },
  },
});

export const { addToBasket, increaseQuantity, decreaseQuantity, removeGoods } =
  counterSlice.actions;
export const basketReducer = counterSlice.reducer;

export const store = configureStore({
  reducer: counterSlice.reducer,
});

export const getGoodsInBasket = (state: RootState) => state.basket.basket;
