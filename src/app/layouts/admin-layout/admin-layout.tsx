import React, { FC } from 'react';
import { Outlet } from 'react-router-dom';
import { StyleProvider } from '@ant-design/cssinjs';
import { Layout } from 'antd';
import { Menu } from './components';

import './styles.scss';

const { Sider, Content } = Layout;

export const AdminLayout: FC = () => (
  <StyleProvider hashPriority="high">
    <Layout className="admin-layout">
      <Sider>
        <Menu />
      </Sider>
      <Layout className="admin-layout-content">
        <Content>
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  </StyleProvider>
);
