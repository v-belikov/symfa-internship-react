import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from 'app/store/cart';
import { useGetProductsQuery } from 'app/store/products';

import './product-card.scss';

export const ProductCard = () => {
  const { data = {}, isLoading } = useGetProductsQuery(null);
  const dispatch = useDispatch();

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  return (
    <div className="products-wrapper">
      <p>{data.length} Product(s) found</p>
      <div className="products-container">
        {data.map((item: any) => (
          <div className="product-item" key={item.id}>
            <p
              className={
                item.isFreeShipping ? 'free-shipping' : 'none-free-shipping'
              }
            >
              Free Shipping
            </p>
            <img
              src={`http://54.175.134.132/images/products/${item.sku}-1-product.webp`}
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
