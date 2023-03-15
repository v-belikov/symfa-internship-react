import React, { FC, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { NavLink } from 'react-router-dom';
import { ROUTES } from 'app/core/models';
/* eslint-disable no-restricted-imports */
import basketiIcon from '../../../../assets/images/shopping-basket.svg';
import { ShoppingBasket } from '../shopping-basket';

import './styles.scss';

const { login } = ROUTES.client.link;

export const Header: FC = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <header className="header wrapper">
      <NavLink to={login}>
        <Button variant="light">login</Button>
      </NavLink>

      <Button variant="light" onClick={handleShow}>
        <img src={basketiIcon} alt="basketiIcon" />
      </Button>
      <Offcanvas show={show} onHide={handleClose} placement="end">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Cart</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <ShoppingBasket />
        </Offcanvas.Body>
      </Offcanvas>
    </header>
  );
};
