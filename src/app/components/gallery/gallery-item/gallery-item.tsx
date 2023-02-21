import React, { FC } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
// import sweaterIcon from '../../../../assets/images/sweater.png';

type PropsType = { title: string };

export const GalleryItem: FC<PropsType> = ({ title }) => {
  return (
    <div className="gallery-item">
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="sweaterIcon" alt="Card image" />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>price</Card.Text>
          <div className="d-grid gap-2">
            <Button variant="dark">Add to cart</Button>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};
