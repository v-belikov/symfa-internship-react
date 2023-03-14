import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import { ROUTES } from './app/core/models';
import { AdminLayout, LoginLayout, MainLayout } from './app/layouts';
import { Goods, Login, Products, Recover, Users } from './app/pages';

const { admin, client } = ROUTES;

export const router = createBrowserRouter([
  {
    path: client.router.products,
    element: <MainLayout />,
    children: [{ path: '', element: <Goods /> }],
  },
  {
    path: client.router.login,
    element: <LoginLayout />,
    children: [
      { index: true, element: <Login /> },
      { path: client.router.recover, element: <Recover /> },
    ],
  },
  {
    path: admin.router.usersDashboard,
    element: <AdminLayout />,
    children: [
      { index: true, element: <Users /> },
      { path: admin.router.productsDashboard, element: <Products /> },
    ],
  },
]);
