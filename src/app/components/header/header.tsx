import React, { FC, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import basketiIcon from '../../../assets/images/shopping-basket.svg';

export const Header: FC = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <header className="header wrapper">
      <Button variant="light" onClick={handleShow}>
        <img src={basketiIcon} alt="basketiIcon" />
      </Button>
      <Offcanvas show={show} onHide={handleClose} placement="end">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Cart</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>Add some products in the cart</Offcanvas.Body>
      </Offcanvas>
    </header>
  );
};