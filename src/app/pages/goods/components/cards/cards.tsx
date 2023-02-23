import React, { Dispatch, FC, SetStateAction } from 'react';
import { useGetProductsQuery } from 'app/store/products/products-api';
import { Products } from '../../goods';

import './cards.scss';

interface Sizes {
  filterSizes: string[];
  setproductsAddedCart: Dispatch<SetStateAction<Products[]>>;
}
export const Cards: FC<Sizes> = ({
  filterSizes,
  setproductsAddedCart,
}: Sizes) => {
  const { data: products } = useGetProductsQuery('products');
  let filteredProducts: never[] = [];
  let filteradProductsArr: never[] = [];

  filteredProducts = products?.map((i: { availableSizes: string[][] }) =>
    i.availableSizes.some((r: any) => filterSizes.includes(r)),
  );

  filteradProductsArr = products?.filter(
    (i: never, ind: number) => filteredProducts[ind] === true,
  );

  const handleClick = (i: Products) => {
    setproductsAddedCart((prev: Products[]) => {
      return prev ? [...prev, i] : [i];
    });
  };

  return (
    <div className="goods-cards">
      <div>{products?.length} Product(s) found</div>
      <div className="cards">
        {(filteradProductsArr?.length === 0
          ? products
          : filteradProductsArr
        )?.map((i: any) => (
          <div key={i.title} className="card">
            <div>
              {i.isFreeShipping === true ? (
                <div className="isFreeShipping">Free Shipping</div>
              ) : (
                ''
              )}
            </div>
            <img
              className="card-image"
              src={`http://54.175.134.132/images/products/${i.sku}-1-cart.webp`}
              alt=""
            />
            <p className="title">{i.title}</p>
            <div className="price">
              {i.currencyFormat}
              <span className="price-bold"> {Math.floor(i.price)}</span>
              {String((i.price - Math.floor(i.price)).toFixed(2)).slice(1)}
            </div>
            <div className="price-parts">
              or {i.installments} x
              <span className="price-parts-bold">
                {i.currencyFormat}
                {(i.price / i.installments).toFixed(2)}
              </span>
            </div>
            <button
              type="button"
              className="add-button"
              onClick={() => handleClick(i)}
            >
              Add to card
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};
