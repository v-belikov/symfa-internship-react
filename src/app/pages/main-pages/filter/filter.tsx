import React, { FC } from 'react';
import Button from 'react-bootstrap/Button';

export const Filter: FC = () => {
  const btn_list: Array<string> = ['XS', 'S', 'M', 'ML', 'L', 'XL', 'XXL'];

  return (
    <div className="filter">
      Sizes:
      <div className="btn-block">
        {btn_list.map((btn: any) => (
          <Button key={btn} variant="outline-secondary">
            {btn}
          </Button>
        ))}
      </div>
    </div>
  );
};
