import React, { FC } from 'react';
import Button from 'react-bootstrap/Button';

export const Filter: FC = () => {
  return (
    <div className="filter">
      Sizes:
      <div className="btn-block">
        <Button variant="outline-secondary">XS</Button>
        <Button variant="outline-secondary">S</Button>
        <Button variant="outline-secondary">M</Button>
        <Button variant="outline-secondary">ML</Button>
        <Button variant="outline-secondary">L</Button>
        <Button variant="outline-secondary">XL</Button>
        <Button variant="outline-secondary">XXL</Button>
      </div>
    </div>
  );
};
