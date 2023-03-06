import React, { FC } from 'react';
import { InitialStateType } from 'app/store/basket';
import { useGetProductsQuery } from 'app/store/products';
import { GalleryItem } from './gallery-item';

import './styles.scss';

export const Gallery: FC = () => {
  const { data, error, isLoading } = useGetProductsQuery('products');

  console.log(data);

  const messageError = error ? 'error' : 'isLoading';

  if (isLoading) {
    return <>messageError</>;
  }

  return (
    <div className="gallery">
      {error
        ? messageError
        : data.map((item: InitialStateType) => {
            return <GalleryItem props={item} key={item.id} />;
          })}
    </div>
  );
};
