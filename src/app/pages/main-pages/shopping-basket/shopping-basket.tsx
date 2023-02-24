import React, { FC } from 'react';
import { useAppSelector } from 'app/core/hooks';
import { getGoodsInBasket } from 'app/store/basket';
import { GoodItem } from './shopping-basket-item';

export const ShoppingBasket: FC<any> = () => {
  const goodsInBasket = useAppSelector(getGoodsInBasket);

  return (
    <div className="shopping-basket wrapper">
      <div>
        {goodsInBasket ? (
          <>
            {goodsInBasket.map((item: any) => {
              return <GoodItem props={item} key={item.id} />;
            })}
          </>
        ) : (
          'empty'
        )}
      </div>
    </div>
  );
};
