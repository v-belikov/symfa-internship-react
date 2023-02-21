import React from 'react';
import { useGetProductsQuery } from '../../store/products';

import './ProductCard.scss';

const ProductCard = () => {
  const { data = {}, isLoading } = useGetProductsQuery(null);

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
              src={`http://54.175.134.132/images/products/${item.sku}-1-cart.webp`}
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
            <button className="add-to-cart-btn" type="button">
              Add to cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductCard;
