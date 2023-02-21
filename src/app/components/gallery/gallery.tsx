import React, { FC, useEffect, useState } from 'react';
import axios from 'axios';
import { GalleryItem } from './gallery-item';

export const Gallery: FC = () => {
  const [products, setProducts] = useState([]);

  // const [products, setProducts] = useState<ProductsType[]>([]);

  // const getProduct = () => {
  //   axios.get<ProductsType>(`http://54.175.134.132//products`).then(res => {
  //     return res.data;
  //   });
  // };

  // type ProductsType = ReturnType<typeof getProduct>;

  useEffect(() => {
    axios.get(`http://54.175.134.132//products`).then(res => {
      setProducts(res.data);
    });
    // setProducts<ProductsType>(getProduct());
  }, []);

  return (
    <div className="gallery">
      {products.map(item => {
        return <GalleryItem key={item.id} title={item.title} />;
      })}
    </div>
  );
};
