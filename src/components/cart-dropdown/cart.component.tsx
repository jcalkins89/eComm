//@ts-nocheck

import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { withRouter } from "react-router-dom";
import { Item } from "../../typescript-types/item-collection-types";

import CustomButton from "../custom-button/custom-button.component";
import CartItem from "../cart-item/cart-item.component";
import { selectCartItems } from "../../redux/cart/cart.selectors";

const Cart = ({ cartItems, history }: { cartItems: Item[]; history: any }) => {
  return (
    <CartDropdown>
      <CartItems>
        {cartItems.length ? (
          cartItems.map((cartItem) => (
            <CartItem key={cartItem.id} item={cartItem} />
          ))
        ) : (
          <EmptyCart>Your cart is empty</EmptyCart>
        )}
      </CartItems>
      <CustomButton
        onClick={() => history.push("/checkout")}
        style={{ marginTop: "auto" }}
      >
        GO TO CHECKOUT
      </CustomButton>
    </CartDropdown>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
});

export default withRouter(connect(mapStateToProps)(Cart));

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

const EmptyCart = styled.span`
  font-size: 18px;
  margin: 50px auto;
`;
