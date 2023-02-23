import React, { FC } from 'react';
import { Filter } from '../filter';
import { Gallery } from '../gallery';

export const Content: FC = () => {
  return (
    <div className="content wrapper">
      <Filter />
      <Gallery />
    </div>
  );
};
