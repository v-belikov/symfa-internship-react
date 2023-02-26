import React, { FC, useState } from 'react';
import { Cards } from './components/cards/cards';
import { Cart } from './components/cart';
import { Sizes } from './components/sizes';

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
