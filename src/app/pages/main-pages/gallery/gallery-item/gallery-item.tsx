import React, { FC } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { config } from 'app/core/config/config';
import { useAppDispatch } from 'app/core/hooks';
import { addToBasket } from 'app/store/basket';

export const GalleryItem: FC<any> = ({ props }) => {
  const dispatch = useAppDispatch();
  const addItemToCard = () => {
    dispatch(addToBasket(props));
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
            <Button onClick={() => addItemToCard()} variant="dark">
              Add to cart
            </Button>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};
