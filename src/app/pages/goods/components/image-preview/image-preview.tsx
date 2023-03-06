import React, { FC, useState } from 'react';
import { config } from 'app/core/config/config';
import { ImagePreview } from 'app/store/products/models';

import './image-preview.scss';

interface IImagePreviewProps {
  images: ImagePreview[];
}
export const ImagesPreview: FC<IImagePreviewProps> = ({
  images,
}: IImagePreviewProps) => {
  const [activeImageOrder, setActiveImageOrder] = useState<number>(0);
  const moveActiveOrder = () => {
    setActiveImageOrder((prevState: number) => (prevState + 1) % images.length);
  };

  return (
    <div
      className="image-preview"
      onMouseEnter={moveActiveOrder}
      onMouseLeave={moveActiveOrder}
    >
      {images.map((image: ImagePreview) => (
        <img
          src={`${config.API_URL}${image.path}`}
          className={`image-preview-item ${
            activeImageOrder === image.order ? '' : 'hidden'
          }`}
          alt=""
          key={image.path}
        />
      ))}
    </div>
  );
};
