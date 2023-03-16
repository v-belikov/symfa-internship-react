import React, { FC } from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from 'app/pages/main-pages/header';

export const MainLayout: FC = () => {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
};
