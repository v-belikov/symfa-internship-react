import React from 'react';
import { NavLink } from 'react-router-dom';
import { Button } from 'antd';
import { ROUTES } from 'app/core/models';
import { Cart } from './cart';
import { ProductCards } from './product-cards';
import { Sizes } from './sizes';

import './products.scss';

const { login } = ROUTES.client.link;

export const ProductsList = () => {
  return (
    <div>
      <div className="login-btn">
        <NavLink to={login}>
          <Button type="primary">Sign In</Button>
        </NavLink>
      </div>

      <div className="index-container">
        <Sizes />
        <ProductCards />
      </div>
      <Cart />
    </div>
  );
};
