import React, { FC } from 'react';
import { Outlet } from 'react-router-dom';
import { Content } from 'app/components/content';
import { Header } from 'app/components/header';

export const MainLayout: FC = () => {
  return (
    <div>
      <Header />
      <Content />
      <Outlet />
    </div>
  );
};
