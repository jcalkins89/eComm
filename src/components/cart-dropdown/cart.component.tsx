import React from "react";
import styled from "styled-components";

import CustomButton from "../custom-button/custom-button.component";

const Cart = () => {
  return (
    <CartDropdown>
      <CartItem />
      <CustomButton style={{ marginTop: "auto" }}>GO TO CHECKOUT</CustomButton>
    </CartDropdown>
  );
};

export default Cart;

const CartDropdown = styled.div`
  position: absolute;
  width: 240px;
  height: 340px;
  display: flex;
  flex-direction: column;
  padding: 20px;
  border: 1px solid black;
  background-color: white;
  top: 90px;
  right: 40px;
  z-index: 5;
`;

const CartItem = styled.div`
  height: 240px;
  display: flex;
  flex-direction: column;
  overflow: scroll;
`;
