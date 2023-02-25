import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import { MainLayout } from './app/layouts';
import { Goods } from './app/pages/goods';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [],
  },
  { path: '', element: <Goods /> },
]);
