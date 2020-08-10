import React from "react";
import styled from "styled-components";
import { Item } from "../../typescript-types/item-collection-types";
import { connect } from "react-redux";

import {
  clearItemFromCart,
  addItem,
  removeItem,
} from "../../redux/cart/cart.actions";

const CheckoutItem = ({
  cartItem,
  clearItem,
  addItem,
  removeItem,
}: {
  cartItem: Item;
  clearItem: (item: Item) => void;
  addItem: (item: Item) => void;
  removeItem: (item: Item) => void;
}) => {
  const { name, imageUrl, price, quantity } = cartItem;
  return (
    <CheckoutItemContainer>
      <ImageContainer>
        <img src={imageUrl} alt="item" />
      </ImageContainer>

      <ItemCategory>{name}</ItemCategory>

      <ItemCategory style={{ display: "flex" }}>
        <Arrow onClick={() => removeItem(cartItem)}>&#10094;</Arrow>
        <Value>{quantity}</Value>
        <Arrow onClick={() => addItem(cartItem)}>&#10095;</Arrow>
      </ItemCategory>

      <ItemCategory>${price}</ItemCategory>

      <RemoveButton onClick={() => clearItem(cartItem)}>&#10005;</RemoveButton>
    </CheckoutItemContainer>
  );
};

const mapDispatchToProps = (dispatch: any) => ({
  clearItem: (item: Item) => dispatch(clearItemFromCart(item)),
  addItem: (item: Item) => dispatch(addItem(item)),
  removeItem: (item: Item) => dispatch(removeItem(item)),
});

export default connect(null, mapDispatchToProps)(CheckoutItem);

const CheckoutItemContainer = styled.div`
  width: 100%;
  display: flex;
  min-height: 100px;
  border-bottom: 1px solid darkgrey;
  padding: 15px 0;
  font-size: 20px;
  align-items: center;
`;

const ImageContainer = styled.div`
  width: 23%;
  padding-right: 15px;

  img {
    width: 100%;
    height: 100%;
  }
`;

const ItemCategory = styled.span`
  width: 23%;
`;

const RemoveButton = styled.div`
  padding-left: 12px;
  cursor: pointer;
`;

const Arrow = styled.div`
  cursor: pointer;
`;

const Value = styled.span`
  margin: 0 10px;
`;
