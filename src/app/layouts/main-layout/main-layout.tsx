import React, { FC } from 'react';
import { Outlet } from 'react-router-dom';
import Test from '../../components/test';

export const MainLayout: FC = () => {
  return (
    <div>
      <Test />
      <Outlet />
    </div>
  );
};
