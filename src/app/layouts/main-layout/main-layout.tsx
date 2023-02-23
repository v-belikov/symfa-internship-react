import React, { FC } from 'react';
import { Outlet } from 'react-router-dom';
import { Goods } from '../../pages/goods/goods';

export const MainLayout: FC = () => {
  return (
    <div>
      <Goods />
      <Outlet />
    </div>
  );
};
