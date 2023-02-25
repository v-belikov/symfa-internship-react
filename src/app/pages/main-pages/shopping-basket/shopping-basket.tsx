import React, { FC } from 'react';
import { useAppSelector } from 'app/core/hooks';
import { getGoodsInBasket } from 'app/store/basket';
import { GoodItem } from './shopping-basket-item';

import './styles.scss';

export const ShoppingBasket: FC<any> = () => {
  const goodsInBasket = useAppSelector(getGoodsInBasket);

  return (
    <div className="shopping-basket wrapper">
      <div>
        {goodsInBasket.length > 0 ? (
          <>
            {goodsInBasket.map((item: any) => {
              return <GoodItem goods={item} key={item.id} />;
            })}
          </>
        ) : (
          'Basket is empty'
        )}
      </div>
    </div>
  );
};
