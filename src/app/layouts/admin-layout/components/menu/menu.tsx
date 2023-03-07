import React, { FC } from 'react';
import { useLocation } from 'react-router-dom';
import { Menu as AntMenu } from 'antd';
import { MENU_ITEMS } from './models';

export const Menu: FC = () => {
  const location = useLocation();

  return (
    <AntMenu
      items={MENU_ITEMS}
      theme="dark"
      selectedKeys={[location.pathname.replace(/^\/(.*)?\/$/, '/$1')]}
    />
  );
};
