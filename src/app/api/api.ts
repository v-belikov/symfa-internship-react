import axios from 'axios';

export const getProduct = () => {
  axios.get<ProductsType>(`http://54.175.134.132//products`).then(res => {
    console.log(res.data);
    // return res.data;
  });
};

export type ProductsType = ReturnType<typeof getProduct>;