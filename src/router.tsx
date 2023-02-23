import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import { MainLayout } from './app/layouts';
import { Index } from './app/pages/products/components';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [{ path: '', element: <Index /> }],
  },
]);
