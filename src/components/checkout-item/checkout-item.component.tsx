import React from "react";
import styled from "styled-components";
import { Item } from "../../typescript-types/item-collection-types";
import { connect } from "react-redux";

import { clearItemFromCart } from "../../redux/cart/cart.actions";

const CheckoutItem = ({
  cartItem,
  clearItem,
}: {
  cartItem: Item;
  clearItem: any;
}) => {
  const { name, imageUrl, price, quantity } = cartItem;
  return (
    <CheckoutItemContainer>
      <ImageContainer>
        <img src={imageUrl} alt="item" />
      </ImageContainer>
      {/* name */}
      <ItemCategory>{name}</ItemCategory>

      {/* quantity */}
      <ItemCategory style={{ paddingLeft: "20px" }}>{quantity}</ItemCategory>

      {/* price */}
      <ItemCategory>{price}</ItemCategory>

      {/* remove button */}
      <RemoveButton onClick={() => clearItem(cartItem)}>&#10005;</RemoveButton>
    </CheckoutItemContainer>
  );
};

const mapDispatchToProps = (dispatch: any) => ({
  clearItem: (item: Item) => dispatch(clearItemFromCart(item)),
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
