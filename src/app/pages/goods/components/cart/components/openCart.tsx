import React, { Dispatch, FC, SetStateAction } from 'react';
import { faCartShopping, faClose } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Products } from '../../../goods';

import './openCart.scss';

interface CartProducts {
  productsAddedCart: Products[];
  setproductsAddedCart: Dispatch<SetStateAction<Products[]>>;
}
export const OpenCart: FC<CartProducts> = ({
  productsAddedCart,
  setproductsAddedCart,
}: CartProducts) => {
  const arrPrice: any[] = [];
  let resPrice = 0;

  productsAddedCart?.map((i: any) => arrPrice.push(i.price));

  if (arrPrice.length) {
    resPrice = arrPrice?.reduce((prev: number, curr: number) => prev + curr);
  }

  const dropProduct = (i: Products) => {
    setproductsAddedCart(prev => prev?.filter(j => j !== i));
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
        {productsAddedCart?.map((i: any) => (
          <div key={i.title} className="cart-open-main">
            <img
              className="card-open-image"
              src={`http://54.175.134.132/images/products/${i.sku}-1-cart.webp`}
              alt=""
            />
            <div className="added-card-info">
              <div>{i.title}</div>
              <div>
                {i.availableSizes[0]} | {i.style}
              </div>
              <div>Quantity: 1</div>
            </div>
            <div className="added-card-actions">
              <button
                type="button"
                className="drop-card"
                onClick={() => dropProduct(i)}
              >
                <FontAwesomeIcon icon={faClose} size="2x" />
              </button>
              <div className="added-card-price">
                {i.currencyFormat} {i.price.toFixed(2)}
              </div>
              <button type="button" className="one-card_button drop">
                -
              </button>
              <button type="button" className="one-card_button add">
                +
              </button>
            </div>
          </div>
        ))}
        <div className="cart-open-footer">
          <div className="info-added-product">
            <div>SUBTOTAL</div>
            <div>
              <div className="added-product-price">$ {resPrice.toFixed(2)}</div>
              <div className="added-product-price-parts">
                {productsAddedCart.length
                  ? `OR UP TO ${
                      productsAddedCart[productsAddedCart.length - 1]
                        .installments
                    } x ${
                      productsAddedCart[productsAddedCart.length - 1]
                        .currencyFormat
                    } ${(
                      resPrice /
                      productsAddedCart[productsAddedCart.length - 1]
                        .installments
                    ).toFixed(2)}`
                  : ''}
              </div>
            </div>
          </div>

          <button type="button" className="checkout_button">
            CHECKOUT
          </button>
        </div>
      </div>
    </div>
  );
};
