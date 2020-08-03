import React from "react";
import styled from "styled-components";

import { ReactComponent as ShoppingCartIcon } from "../../assets/shopping-bag.svg";

const CartIcon = () => {
  return (
    <CartIconContainer>
      <ShoppingCartIconContainer>
        <ShoppingCartIcon />
      </ShoppingCartIconContainer>
      <ItemCount>0</ItemCount>
    </CartIconContainer>
  );
};

export default CartIcon;

const CartIconContainer = styled.div`
  width: 45px;
  height: 45px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

const ShoppingCartIconContainer = styled.div`
  width: 24px;
  height: 24px;
`;

const ItemCount = styled.span`
  position: absolute;
  font-size: 10px;
  font-weight: bold;
  bottom: 12px;
`;
