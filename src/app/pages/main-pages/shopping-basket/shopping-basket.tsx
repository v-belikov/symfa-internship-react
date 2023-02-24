import React, { FC } from 'react';
import Button from 'react-bootstrap/Button';
import { useAppSelector } from 'app/core/hooks';
import { getGoodsInBasket, InitialStateType } from 'app/store/basket';

export const ShoppingBasket: FC = () => {
  const goodsInBasket = useAppSelector(getGoodsInBasket);

  const GoodItem: FC = () => {
    return (
      <div>
        <Button variant="dark">+</Button>
        <Button variant="dark">-</Button>
        <Button variant="dark">remove</Button>
      </div>
    );
  };

  return (
    <div className="shopping-basket wrapper">
      <div>
        {goodsInBasket ? (
          <>
            {goodsInBasket.map((item: InitialStateType) => {
              return <GoodItem key={item.id} />;
            })}
          </>
        ) : (
          'empty'
        )}
      </div>
    </div>
  );
};
