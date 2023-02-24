import React, { FC } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { config } from 'app/core/config/config';
import { addToBasket, store } from 'app/store/basket';

export interface GoodPropsType {
  id: number;
  title: string;
  price: number;
  currencyFormat: string;
  availableSizes: Array<string>;
  sku: number;
  currencyId: string;
  description: string;
  installments: number;
  isFreeShipping: boolean;
  style: string;
}

export const GalleryItem: FC<GoodPropsType> = ({ props }) => {
  const addItemToCard = () => {
    store.dispatch(addToBasket({ props }));
    console.log(props.title, props.price);
  };

  return (
    <div className="gallery-item">
      <Card>
        <Card.Img
          variant="top"
          src={`${config.API_URL}/images/products/${props.sku}-1-cart.webp`}
          alt="Card image"
        />
        <Card.Body>
          <Card.Title>{props.title}</Card.Title>
          <Card.Text>
            {props.currencyFormat}
            {props.price}
          </Card.Text>
          <div className="d-grid gap-2">
            <Button onClick={() => addItemToCard({ props })} variant="dark">
              Add to cart
            </Button>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};
