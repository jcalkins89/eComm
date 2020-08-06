//@ts-nocheck

import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { Item } from "../../typescript-types/item-collection-types";

import CustomButton from "../custom-button/custom-button.component";
import CartItem from "../cart-item/cart-item.component";
import { selectCartItems } from "../../redux/cart/cart.selectors";

const Cart = ({ cartItems }: { cartItems: Item[] }) => {
  return (
    <CartDropdown>
      <CartItems>
        {cartItems.map((cartItem) => (
          <CartItem key={cartItem.id} item={cartItem} />
        ))}
      </CartItems>
      <CustomButton style={{ marginTop: "auto" }}>GO TO CHECKOUT</CustomButton>
    </CartDropdown>
  );
};

console.log("STATE: ", state);

const mapStateToProps = (state) => ({
  cartItems: selectCartItems(state),
});

export default connect(mapStateToProps)(Cart);

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

const CartItems = styled.div`
  height: 240px;
  display: flex;
  flex-direction: column;
  overflow: scroll;
`;
