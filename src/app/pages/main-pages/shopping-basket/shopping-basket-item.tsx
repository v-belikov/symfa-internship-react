import React, { FC } from 'react';
import Button from 'react-bootstrap/Button';
import { config } from 'app/core/config';
import { useAppDispatch } from 'app/core/hooks';
import {
  decreaseQuantity,
  increaseQuantity,
  removeGoods,
} from 'app/store/basket';

export const GoodItem: FC<any> = ({ goods }) => {
  const dispatch = useAppDispatch();

  return (
    <div className="goods-item">
      <img
        src={`${config.API_URL}/images/products/${goods.sku}-1-cart.webp`}
        alt="img-cart"
      />
      <div className="goods-item-description">
        <h5>{goods.title}</h5>
        <div className="goods-item-description__price-block">
          <h5>${goods.price}</h5>
          <h5>quantity: {goods.quantity}</h5>
        </div>
        <div className="goods-item-description__bnt-block">
          <Button
            onClick={() => dispatch(increaseQuantity(goods.id))}
            variant="dark"
          >
            +
          </Button>
          <Button
            onClick={() => dispatch(decreaseQuantity(goods.id))}
            variant="dark"
          >
            -
          </Button>
          <Button
            onClick={() => dispatch(removeGoods(goods.id))}
            variant="dark"
          >
            X
          </Button>
        </div>
      </div>
    </div>
  );
};
