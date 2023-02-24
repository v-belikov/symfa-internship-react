import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import { Content } from 'app/pages/main-pages/content';
import { MainLayout } from './app/layouts';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [{ path: '', element: <Content /> }],
  },
]);
