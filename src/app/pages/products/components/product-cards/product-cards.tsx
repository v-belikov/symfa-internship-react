import React from 'react';
import { useDispatch } from 'react-redux';
import { config } from 'app/core/config';
import { useAppSelector } from 'app/core/hooks';
import { addToCart, IProduct } from 'app/store/cart';
import { useGetProductsQuery } from 'app/store/products';
import { getSizesSelector } from 'app/store/sizes';

import './product-card.scss';

export const ProductCards = () => {
  const { data = [], isLoading } = useGetProductsQuery(null);
  const sizes = useAppSelector(getSizesSelector);
  const dispatch = useDispatch();

  const isAvailableSizes = (array: Array<string>): boolean => {
    if (sizes.length === 0) {
      return true;
    }

    return sizes.filter(x => array.includes(x)).length !== 0;
  };

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  return (
    <div className="products-wrapper">
      <p>{data.length} Product(s) found</p>
      <div className="products-container">
        {data.map((item: IProduct) => (
          <div
            className={
              isAvailableSizes(item.availableSizes)
                ? 'product-item'
                : 'product-item product-item-hide'
            }
            key={item.id}
          >
            <p
              className={
                item.isFreeShipping ? 'free-shipping' : 'none-free-shipping'
              }
            >
              Free Shipping
            </p>
            <img
              src={`${config.API_URL}/${item.imagePreview[0]}`}
              alt="product"
            />
            <p className="title">{item.title}</p>
            <p>
              {item.currencyFormat} {item.price}
            </p>
            <p>
              or {item.installments} x{item.currencyFormat}
              {(item.price / item.installments).toFixed(2)}
            </p>
            <button
              className="add-to-cart-btn"
              type="button"
              onClick={() => {
                dispatch(addToCart({ item }));
              }}
            >
              Add to cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};
