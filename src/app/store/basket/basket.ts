import { configureStore, createSlice } from '@reduxjs/toolkit';
import { GoodPropsType } from 'app/pages/main-pages/gallery/gallery-item';

export interface InitialStateType extends GoodPropsType {
  quantity: number;
}
const initialState: InitialStateType = { basket: [] };

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

export const store = configureStore({
  reducer: counterSlice.reducer,
});

store.subscribe(() => console.log(store.getState()));
