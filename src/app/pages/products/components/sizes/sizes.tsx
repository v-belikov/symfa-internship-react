import React from 'react';

import './sizes.scss';

export const Sizes = () => {
  const availableSizes = ['XS', 'S', 'M', 'ML', 'L', 'XL', 'XXL'];

  return (
    <div className="sizes-container">
      <h2>Sizes:</h2>
      <div className="sizes-wrapper">
        {availableSizes.map(elem => {
          return (
            <div className="size-item" key={availableSizes.indexOf(elem)}>
              {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
              <label>
                <input type="checkbox" value={elem} className="checkbox" />
                <p className="size">{elem}</p>
              </label>
            </div>
          );
        })}
      </div>
    </div>
  );
};
