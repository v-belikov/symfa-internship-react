import React, { FC } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { config } from 'app/core/config/config';
import { useAppDispatch } from 'app/core/hooks';
import { addToBasket } from 'app/store/basket';
// eslint-disable-next-line no-restricted-imports
import defaultImg from '../../../../../assets/images/sweater.png';

export const GalleryItem: FC<any> = ({ props }) => {
  const dispatch = useAppDispatch();
  const addItemToCard = () => {
    dispatch(addToBasket(props));
    console.log(props);
  };

  return (
    <div className="gallery-item">
      <Card>
        {props.sku ? (
          <Card.Img
            variant="top"
            // src={`${config.API_URL}/images/products/${props.sku}-1-product.webp`}
            src={`${config.API_URL}/${props.products.imageCart.path}`}
            alt="Card image"
          />
        ) : (
          <img src={defaultImg} alt="defaultImg" />
        )}

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
