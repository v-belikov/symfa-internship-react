import React, { FC, useEffect } from 'react';
import { getProduct } from 'app/api/api';
import { GalleryItem } from './gallery-item';

export const Gallery: FC = () => {
  // const [products, setProducts] = useState();

  useEffect(() => {
    getProduct();
  }, []);

  // console.log(products);

  return (
    <div className="gallery">
      <GalleryItem />
    </div>
  );
};
