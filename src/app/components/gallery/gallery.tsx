import React, { FC } from 'react';
import { useGetProductsQuery } from 'app/store/products';
import { GalleryItem } from './gallery-item';

export const Gallery: FC = () => {
  const { data, error, isLoading } = useGetProductsQuery('products');

  type ProductsType = ReturnType<typeof data>;

  return (
    <div className="gallery">
      {error || isLoading
        ? 'error'
        : data.map((item: ProductsType) => {
            return (
              <GalleryItem
                key={item.id}
                title={item.title}
                price={item.price}
                currencyFormat={item.currencyFormat}
              />
            );
          })}
    </div>
  );
};
