import React from "react";
import styled from "styled-components";
import { HeaderTitles } from "./checkout-headers.data";

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { Item } from "../../typescript-types/item-collection-types";

import CheckoutItem from "../../components/checkout-item/checkout-item.component";
import StripeCheckoutButton from "../../components/stripe-button/stripe-button.component";

import {
  selectCartItems,
  selectCartTotal,
} from "../../redux/cart/cart.selectors";

const CheckoutPage = ({
  cartItems,
  total,
}: {
  cartItems: Item[];
  total: number;
}) => {
  return (
    <CheckoutPageContainer>
      <CheckoutHeader>
        {HeaderTitles.map((title) => (
          <HeaderBlock key={title}>{title}</HeaderBlock>
        ))}
      </CheckoutHeader>
      {cartItems.map((cartItem) => (
        <CheckoutItem key={cartItem.id} cartItem={cartItem} />
      ))}
      <Total>TOTAL: ${total}</Total>
      <TestWarning>
        *Please use the following test credit card for payments*
        <br />
        4000 0566 5566 5556 - Exp: 01/21 - CVV: 123
      </TestWarning>
      <StripeCheckoutButton
        price={total}
        style={{ marginLeft: "auto", marginTop: "50px" }}
      />
    </CheckoutPageContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal,
});

export default connect(mapStateToProps)(CheckoutPage);

const CheckoutPageContainer = styled.div`
  width: 55%;
  min-height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 50px auto 0;
`;

const CheckoutHeader = styled.div`
  width: 100%;
  padding: 10px 0;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid darkgrey;
`;

const HeaderBlock = styled.div`
  text-transform: capitalize;
  width: 23%;

  &:last-child {
    width: 8%;
  }
`;

const Total = styled.div`
  margin-top: 30px;
  margin-left: auto;
  font-size: 36px;
`;

const TestWarning = styled.div`
  text-align: center;
  margin-top: 40px;
  font-size: 24px;
  color: red;
`;
