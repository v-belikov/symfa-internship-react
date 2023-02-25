import React, { Dispatch, FC, SetStateAction } from 'react';
import { faCartShopping, faClose } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { config } from 'app/core/config/config';
import { useAppDispatch, useAppSelector } from 'app/core/hooks';
import { RootState } from 'app/store';
import {
  dropProductFromCart,
  removeQuantityCartProduct,
} from 'app/store/products/cart-slice';
import { Products } from '../../../goods';

import './openCart.scss';

interface CartProducts {
  addToCart: (i: Products) => void;
  resPrice: number;
  setResPrice: Dispatch<SetStateAction<number>>;
}
export const OpenCart: FC<CartProducts> = ({
  addToCart,
  resPrice,
  setResPrice,
}: CartProducts) => {
  const productsInCart = useAppSelector(
    (state: RootState) => state.cart.productsInCart,
  );

  const dispatch = useAppDispatch();

  const dropProductFromCart1 = (i: Products) => {
    dispatch(dropProductFromCart(i) as any);
  };

  const remove = (i: Products) => {
    setResPrice(resPrice - i.price);
    dispatch(removeQuantityCartProduct(i));
  };

  return (
    <div className="cart-open">
      <div className="cart-open-header">
        <span>
          <FontAwesomeIcon icon={faCartShopping} color="white" size="2x" />
        </span>
        <span className="cart-name">Cart</span>
      </div>
      <div className="cart-open-content">
        {productsInCart?.map((i: any) => (
          <div key={i.title} className="cart-open-card">
            <img
              className="cart-open-card-image"
              src={`${config.API_URL}/images/products/${i.sku}-1-cart.webp`}
              alt=""
            />
            <div className="cart-open-card-info">
              <div>{i.title}</div>
              <div className="cart-open-card-info-discription">
                <div>
                  {i.availableSizes[0]} | {i.style}
                </div>
                <div>Quantity: {i.amount}</div>
              </div>
            </div>
            <div className="cart-open-card-actions">
              <button
                type="button"
                className="cart-open-card-close"
                onClick={() => dropProductFromCart1(i)}
              >
                <FontAwesomeIcon icon={faClose} size="2x" />
              </button>
              <div className="cart-open-card-price">
                {i.currencyFormat} {i.price.toFixed(2)}
              </div>
              <div className="cart-open-card-buttons-changing">
                <button
                  type="button"
                  className="cart-open-card_button drop"
                  onClick={
                    i.amount === 1
                      ? () => dropProductFromCart1(i)
                      : () => remove(i)
                  }
                >
                  -
                </button>
                <button
                  type="button"
                  className="cart-open-card_button add"
                  onClick={() => addToCart(i)}
                >
                  +
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="cart-open-footer">
        <div className="cart-open-footer-info">
          <div className="cart-open-footer-subtotal">SUBTOTAL</div>
          <div className="cart-open-footer-price-info">
            <div className="cart-open-footer-price">
              $ {resPrice.toFixed(2)}
            </div>
            <div className="cart-open-footer-price-parts">
              {productsInCart.length
                ? `OR UP TO ${
                    productsInCart[productsInCart.length - 1].installments
                  } x ${
                    productsInCart[productsInCart.length - 1].currencyFormat
                  } ${(
                    resPrice /
                    productsInCart[productsInCart.length - 1].installments
                  ).toFixed(2)}`
                : ''}
            </div>
          </div>
        </div>

        <button type="button" className="cart-open-footer-checkout_button">
          CHECKOUT
        </button>
      </div>
    </div>
  );
};
