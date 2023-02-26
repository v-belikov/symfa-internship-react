import React, { FC } from 'react';
import { config } from 'app/core/config/config';
import { useAppDispatch } from 'app/core/hooks';
import { Product } from 'app/store/products';
import { setCartProducts } from 'app/store/products/cart-slice';
import { useGetProductsQuery } from 'app/store/products/products-api';

import './cards.scss';

interface Sizes {
  filterSizes: string[];
}
export const Cards: FC<Sizes> = ({ filterSizes }: Sizes) => {
  const { data: products = [] } = useGetProductsQuery({
    availableSizes: filterSizes,
  });

  const dispatch = useAppDispatch();

  return (
    <div className="goods-cards">
      <div>{products.length} Product(s) found</div>
      <div className="cards">
        {products.map((product: Product) => {
          const [priceWholePart, priceFaction] = product.price
            .toFixed(2)
            .split('.');

          return (
            <div key={product.title} className="card-item">
              <div className="card-item-image">
                {product.isFreeShipping ? (
                  <div className="is-free-shipping">Free Shipping</div>
                ) : null}
                <img
                  src={`${config.API_URL}/images/products/${product.sku}-1-cart.webp`}
                  alt=""
                />
              </div>
              <p className="card-item-title">{product.title}</p>
              <div className="card-item-price">
                {product.currencyFormat}
                <span className="card-item-price bold"> {priceWholePart}</span>.
                {priceFaction}
                <div className="card-item-price-parts">
                  or {product.installments} x
                  <span className="bold">
                    {product.currencyFormat}
                    {(product.price / product.installments).toFixed(2)}
                  </span>
                </div>
              </div>
              <button
                type="button"
                className="card-item-add-button"
                onClick={() => dispatch(setCartProducts(product))}
              >
                Add to card
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};
