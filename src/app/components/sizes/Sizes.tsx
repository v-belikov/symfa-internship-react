import React from 'react';

import './Sizes.scss';

const Sizes = () => {
  return (
    <div className="sizes-container">
      <h1>Sizes:</h1>
      <div className="size-item">
        <input type="checkbox" value="XS" />
        <span className="size-title">XS</span>
      </div>
      <div className="size-item">
        <input type="checkbox" value="S" />
        <span className="size-title">S</span>
      </div>
      <div className="size-item">
        <input type="checkbox" value="M" />
        <span className="size-title">M</span>
      </div>
      <div className="size-item">
        <input type="checkbox" value="ML" />
        <span className="size-title">ML</span>
      </div>
      <div className="size-item">
        <input type="checkbox" value="L" />
        <span className="size-title">L</span>
      </div>
      <div className="size-item">
        <input type="checkbox" value="XL" />
        <span className="size-title">XL</span>
      </div>
      <div className="size-item">
        <input type="checkbox" value="XXL" />
        <span className="size-title">XXL</span>
      </div>
    </div>
  );
};

export default Sizes;
