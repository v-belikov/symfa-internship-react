import React, { Dispatch, FC, SetStateAction } from 'react';
import { sizes } from 'app/core/models/sizes.constant';

import './sizes.scss';

interface FilterSizes {
  setFilterSizes: Dispatch<SetStateAction<string[]>>;
}

export const Sizes: FC<FilterSizes> = ({ setFilterSizes }: FilterSizes) => {
  const handleClick = (size: string) => {
    setFilterSizes(prev =>
      prev.includes(size)
        ? prev.filter(prevSize => prevSize === size)
        : [...prev, size],
    );
  };

  return (
    <div className="sizes">
      <p className="sizes-head">Sizes:</p>
      <div className="sizes-buttons">
        {sizes.map(size => (
          <button
            key={size}
            type="button"
            className="sizes-buttons_button"
            onClick={() => handleClick(size)}
          >
            {size}
          </button>
        ))}
      </div>
    </div>
  );
};
