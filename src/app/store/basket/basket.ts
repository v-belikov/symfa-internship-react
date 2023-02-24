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
      const currentGoods = state.basket.find((item: any) => {
        return item.props.id === action.payload.props.id;
      });

      if (currentGoods) {
        currentGoods.quantity += 1;
      } else {
        state.basket.push({ ...action.payload, quantity: 1 });
      }
    },
  },
});

export const { addToBasket } = counterSlice.actions;
export const basketReducer = counterSlice.reducer;

export const store = configureStore({
  reducer: counterSlice.reducer,
});

export const getGoodsInBasket = (state: RootState) => state.basket.basket;

store.subscribe(() => console.log(store.getState()));
