export type Product = {
  id: string;
  availableSizes: string[];
  currencyFormat: string;
  currencyId: string;
  description: string;
  installments: number;
  isFreeShipping: boolean;
  imagePreview: ImagePreview[];
  imageCart: ImageCart;
  price: number;
  style: string;
  title: string;
  amount: number;
};
export type ImagePreview = {
  id: string;
  path: string;
  order: number;
};
export type ImageCart = {
  id: string;
  path: string;
};
