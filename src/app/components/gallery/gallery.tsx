import React, { FC } from 'react';
import { GalleryItem } from './gallery-item';

export const Gallery: FC = () => {
  return (
    <div className="gallery">
      <GalleryItem />
      {/* <GalleryItem />
      <GalleryItem /> */}
    </div>
  );
};
