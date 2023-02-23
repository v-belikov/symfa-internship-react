import React, { Dispatch, FC, SetStateAction } from 'react';

import './sizes.scss';

interface FilterSizes {
  setFilterSizes: Dispatch<SetStateAction<string[]>>;
}

export const Sizes: FC<FilterSizes> = ({ setFilterSizes }: FilterSizes) => {
  const sizes = ['XS', 'S', 'M', 'ML', 'L', 'XL', 'XXL'];

  const handleClick = (size: string) => {
    setFilterSizes((prev: string[]) => {
      let result: string | string[] = [];

      if (prev.includes(size)) {
        result = prev.filter(i => i !== size);
      } else if (prev) {
        result = [...prev, size];
      } else {
        result = [size];
      }

      return result;
    });
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
