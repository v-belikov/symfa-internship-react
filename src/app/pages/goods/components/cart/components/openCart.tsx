import React, { FC } from 'react';
import { faCartShopping, faClose } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { config } from 'app/core/config/config';
import { useAppDispatch, useAppSelector } from 'app/core/hooks';
import { Product } from 'app/store/products';
import {
  dropProductFromCart,
  getProductsInCart,
  removeQuantityCartProduct,
  setCartProducts,
} from 'app/store/products/cart-slice';

export const OpenCart: FC = () => {
  const productsInCart = useAppSelector(getProductsInCart);

  const resultPrice = productsInCart.reduce((acc: number, i: Product) => {
    return acc + i.price * i.amount;
  }, 0);

  const dispatch = useAppDispatch();

  return (
    <div className="cart-open">
      <div className="cart-open-header">
        <span>
          <FontAwesomeIcon icon={faCartShopping} color="white" size="2x" />
        </span>
        <span className="cart-name">Cart</span>
      </div>
      <div className="cart-open-content">
        {productsInCart.map((product: Product) => (
          <div key={product.title} className="cart-open-card">
            <input
              type="image"
              className="cart-open-card-image"
              src={`${config.API_URL}${product.imageCart.path}`}
              alt="image"
            />
            <div className="cart-open-card-info">
              <div>{product.title}</div>
              <div className="cart-open-card-info-discription">
                <div>
                  {product.availableSizes[0]} | {product.style}
                </div>
                <div>Quantity: {product.amount}</div>
              </div>
            </div>
            <div className="cart-open-card-actions">
              <button
                type="button"
                className="cart-open-card-close"
                onClick={() => dispatch(dropProductFromCart(product))}
              >
                <FontAwesomeIcon icon={faClose} size="2x" />
              </button>
              <div className="cart-open-card-price">
                {product.currencyFormat} {product.price.toFixed(2)}
              </div>
              <div className="cart-open-card-buttons-changing">
                <button
                  type="button"
                  className="cart-open-card_button drop"
                  onClick={() => dispatch(removeQuantityCartProduct(product))}
                >
                  -
                </button>
                <button
                  type="button"
                  className="cart-open-card_button add"
                  onClick={() => dispatch(setCartProducts(product))}
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
              $ {resultPrice.toFixed(2)}
            </div>
            <div className="cart-open-footer-price-parts">
              {productsInCart.length
                ? `OR UP TO ${
                    productsInCart[productsInCart.length - 1].installments
                  } x ${
                    productsInCart[productsInCart.length - 1].currencyFormat
                  } ${(
                    resultPrice /
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
