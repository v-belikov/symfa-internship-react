import React, { FC, useMemo } from 'react';
import { useAppSelector } from 'app/core/hooks';
import { getGoodsInBasket, InitialStateType } from 'app/store/basket';
import { GoodItem } from './shopping-basket-item';

import './styles.scss';

export const ShoppingBasket: FC<any> = () => {
  const goodsInBasket = useAppSelector(getGoodsInBasket);

  const totalPrice = useMemo(
    () =>
      goodsInBasket.reduce((sum: number, item: InitialStateType): number => {
        return sum + item.price * item.quantity;
      }, 0),
    [goodsInBasket],
  );

  return (
    <div className="shopping-basket wrapper">
      <div>
        {goodsInBasket.length > 0 ? (
          <>
            {goodsInBasket.map((item: InitialStateType) => {
              return <GoodItem goods={item} key={item.id} />;
            })}
            <h5 className="shopping-basket__total_price">
              total price: {totalPrice}
            </h5>
          </>
        ) : (
          'Basket is empty'
        )}
      </div>
    </div>
  );
};
