import React, { FC } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

type PropsType = { title: string; price: number; currencyFormat: string };

export const GalleryItem: FC<PropsType> = ({
  title,
  price,
  currencyFormat,
}) => {
  return (
    <div className="gallery-item">
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="sweaterIcon" alt="Card image" />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>
            {currencyFormat}
            {price}
          </Card.Text>
          <div className="d-grid gap-2">
            <Button variant="dark">Add to cart</Button>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};
