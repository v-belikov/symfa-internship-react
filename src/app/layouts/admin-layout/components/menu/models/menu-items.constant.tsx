import React from 'react';
import { Link } from 'react-router-dom';
import { MenuProps } from 'antd';
import { ROUTES } from '../../../../../core/models';

const { usersDashboard, productsDashboard } = ROUTES.admin.link;
const { login } = ROUTES.client.link;

export const MENU_ITEMS: MenuProps['items'] = [
  {
    label: <Link to={usersDashboard}>Users</Link>,
    key: usersDashboard,
  },
  {
    label: <Link to={productsDashboard}>Products</Link>,
    key: productsDashboard,
  },
  {
    label: <Link to={login}>Logout</Link>,
    key: login,
  },
];
