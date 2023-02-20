import React from 'react';
import { useGetProductsQuery } from '../../store/products';

import './ProductCard.scss';

const ProductCard = () => {
  const { data = {}, isLoading } = useGetProductsQuery(null);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  return (
    <div>
      <p>{data.length} Product(s) found</p>
      {data.map((item: any) => (
        <>
          <div>
            {item.availableSizes.map((elem: any) => (
              <div key="">{elem}</div>
            ))}
          </div>
          <span>{item.currencyFormat}</span>
          <span>{item.currencyId}</span>
          <span>{item.description}</span>
          <span>{item.price}</span>
          <p>
            or {item.installments} x{item.currencyFormat}
            {(item.price / item.installments).toFixed(2)}
          </p>
          <span>{item.isFreeShipping ? 'Free Shipping' : ''}</span>
          <span>{item.style}</span>
          <span>{item.title}</span>
          <hr />
        </>
      ))}
    </div>
  );
};

export default ProductCard;
