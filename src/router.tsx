import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import { MainLayout } from './app/layouts';
import { Products } from './app/pages/products/components/products';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [{ path: '', element: <Products /> }],
  },
]);
