import React from 'react';
import { AVAILABLE_SIZES } from 'app/core/models/available-sizes.constant';

import './sizes.scss';

export const Sizes = () => {
  return (
    <div className="sizes-container">
      <h3>Sizes:</h3>
      <div className="sizes-wrapper">
        {AVAILABLE_SIZES.map(size => {
          return (
            <div className="size-item" key={size}>
              <label>
                <input type="checkbox" value={size} className="checkbox" />
                <p className="size">{size}</p>
              </label>
            </div>
          );
        })}
      </div>
    </div>
  );
};
