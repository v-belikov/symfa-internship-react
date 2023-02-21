import React, { FC } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
// import sweaterIcon from '../../../../assets/images/sweater.png';

export const GalleryItem: FC = () => {
  return (
    <div className="gallery-item">
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="sweaterIcon" alt="Card image" />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>price</Card.Text>
          <div className="d-grid gap-2">
            <Button variant="dark">Add to cart</Button>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};
