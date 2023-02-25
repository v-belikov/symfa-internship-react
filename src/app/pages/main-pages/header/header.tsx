import React, { FC, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
/* eslint-disable no-restricted-imports */
import basketiIcon from '../../../../assets/images/shopping-basket.svg';
import { ShoppingBasket } from '../shopping-basket';

import './styles.scss';

export const Header: FC = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // const [totalPrice, setTotalPrice] = useState<number>(0);

  // const TotalPriceGoodsInBasket = (): void => {
  //   const goodsInBasket = useAppSelector(getGoodsInBasket);

  //   goodsInBasket.map((item: any) => {
  //     return item.price;
  //   });
  // };

  // setTotalPrice(TotalPriceGoodsInBasket);

  return (
    <header className="header wrapper">
      <Button variant="light" onClick={handleShow}>
        <img src={basketiIcon} alt="basketiIcon" />
      </Button>
      <Offcanvas show={show} onHide={handleClose} placement="end">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Cart</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <ShoppingBasket />
          <h5 className="header__total_price">total price: </h5>
        </Offcanvas.Body>
      </Offcanvas>
    </header>
  );
};
