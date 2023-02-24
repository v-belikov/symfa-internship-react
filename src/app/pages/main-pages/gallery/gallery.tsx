import React, { FC } from 'react';
import { useGetProductsQuery } from 'app/store/products';
import { GalleryItem } from './gallery-item';

import './styles.scss';

export const Gallery: FC = () => {
  const { data, error, isLoading } = useGetProductsQuery('products');

  const messageError = error ? 'error' : 'isLoading';

  if (isLoading) {
    return <>messageError</>;
  }

  return (
    <div className="gallery">
      {error
        ? messageError
        : data.map((item: any) => {
            return <GalleryItem props={item} key={item.id} />;
          })}
    </div>
  );
};
