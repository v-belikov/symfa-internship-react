import React, { useState } from 'react';
import { useAppDispatch } from 'app/core/hooks';
import { AVAILABLE_SIZES } from 'app/core/models/available-sizes.constant';
import { addToSizes } from 'app/store/sizes';

import './sizes.scss';

export const Sizes = () => {
  const [selectedSize, setSelectedSize] = useState<Array<string>>([]);
  const dispatch = useAppDispatch();
  const handleChange = (event: any) => {
    const { value, checked } = event.target;

    setSelectedSize(pre =>
      checked ? [...pre, value] : pre.filter(elem => elem !== value),
    );

    dispatch(addToSizes(selectedSize));
  };

  return (
    <div className="sizes-container">
      <h3>Sizes:</h3>
      <div className="sizes-wrapper">
        {AVAILABLE_SIZES.map(size => {
          return (
            <div className="size-item" key={size}>
              <label>
                <input
                  type="checkbox"
                  value={size}
                  className="checkbox"
                  onChange={handleChange}
                />
                <p className="size">{size}</p>
              </label>
            </div>
          );
        })}
      </div>
    </div>
  );
};
