import React, { FC } from 'react';
import Button from 'react-bootstrap/Button';
import { AVAILABLE_SIZES } from 'app/core/models/available-sizes.constant';

import './styles.scss';

export const Filter: FC = () => {
  return (
    <div className="filter">
      Sizes
      <div className="btn-block">
        {AVAILABLE_SIZES.map((size: string) => (
          <Button key={size} variant="outline-secondary">
            {size}
          </Button>
        ))}
      </div>
    </div>
  );
};
