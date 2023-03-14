import React, { FC, useState } from 'react';
import { Cards } from './components/cards/index';
import { Cart } from './components/cart/index';
import { Sizes } from './components/sizes/index';

import './goods.scss';

export const Goods: FC = () => {
  const [filterSizes, setFilterSizes] = useState<string[]>([]);

  return (
    <div className="goods">
      <Sizes setFilterSizes={setFilterSizes} />
      <Cards filterSizes={filterSizes} />
      <Cart />
    </div>
  );
};
