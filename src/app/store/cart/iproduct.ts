export interface IProduct {
  availableSizes: string[];
  currencyFormat: string;
  currencyId: string;
  description: string;
  id: number;
  installments: number;
  isFreeShipping: boolean;
  price: number;
  sku: number;
  style: string;
  title: string;
}

export interface ICartProduct extends IProduct {
  item: IProduct;
  quantity: number;
}
