// @ts-nocheck
import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";

import { ReactComponent as ShoppingCartIcon } from "../../assets/shopping-bag.svg";
import { toggleCartHidden } from "../../redux/cart/cart.actions";

const CartIcon = ({ toggleCartHidden }) => {
  return (
    <CartIconContainer onClick={toggleCartHidden}>
      <ShoppingCartIconContainer>
        <ShoppingCartIcon />
      </ShoppingCartIconContainer>
      <ItemCount>0</ItemCount>
    </CartIconContainer>
  );
};

const mapDispatchToProps = (dispatch) => ({
  toggleCartHidden: () => dispatch(toggleCartHidden()),
});

export default connect(null, mapDispatchToProps)(CartIcon);

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
