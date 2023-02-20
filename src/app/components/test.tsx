import React from 'react';
import { useGetProductsQuery } from '../store/products';

const Test = () => {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const { data, isLoading } = useGetProductsQuery();

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  return <div> {data} </div>;
};

export default Test;
