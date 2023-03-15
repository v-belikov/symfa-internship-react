import React, { FC } from 'react';
import { Outlet } from 'react-router-dom';
import { StyleProvider } from '@ant-design/cssinjs';
import { Layout } from 'antd';

import './styles.scss';

const { Content } = Layout;

export const LoginLayout: FC = () => (
  <StyleProvider hashPriority="high">
    <Layout className="login-layout">
      <Content className="login-layout-content">
        <Outlet />
      </Content>
    </Layout>
  </StyleProvider>
);
