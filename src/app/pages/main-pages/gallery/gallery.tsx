import React, { FC } from 'react';
import { useGetProductsQuery } from 'app/store/products';
import { GalleryItem } from './gallery-item';

export const Gallery: FC = () => {
  const { data, error, isLoading } = useGetProductsQuery('products');

  // type ProductsType = ReturnType<typeof data>;
  const messageError = error ? 'error' : 'isLoading';

  return (
    <div className="gallery">
      {error || isLoading
        ? messageError
        : data.map((item: any) => {
            return <GalleryItem props={item} key={item.id} />;
          })}
    </div>
  );
};
