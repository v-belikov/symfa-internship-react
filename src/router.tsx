import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Index from './app/components';
import { MainLayout } from './app/layouts';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [{ path: '', element: <Index /> }],
  },
]);
