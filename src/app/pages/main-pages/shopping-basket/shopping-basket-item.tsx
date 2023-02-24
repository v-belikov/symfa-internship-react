import React, { FC } from 'react';
import Button from 'react-bootstrap/Button';

export const GoodItem: FC<any> = ({ props }) => {
  console.log(props);

  return (
    <div>
      <h5>{props.title}</h5>
      <h5>{props.price}</h5>
      <div className="bnt-block">
        <Button variant="dark">+</Button>
        <Button variant="dark">-</Button>
        <Button variant="dark">remove</Button>
      </div>
    </div>
  );
};
