import React from "react";
import styled from "styled-components";
import { Item } from "../../typescript-types/item-collection-types";

const CartItem = ({
  item: { imageUrl, price, name, quantity },
}: {
  item: Item;
}) => {
  return (
    <CartItemContainer>
      <Image src={imageUrl} alt="item" />
      <ItemDetailsContainer>
        <Detail>{name}</Detail>
        <Detail>
          {quantity} x ${price}
        </Detail>
      </ItemDetailsContainer>
    </CartItemContainer>
  );
};

export default CartItem;

const CartItemContainer = styled.div`
  width: 100%;
  display: flex;
  height: 80px;
  margin-bottom: 15px;
`;

const Image = styled.img`
  width: 30%;
`;

const ItemDetailsContainer = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 10px 20px;
`;

const Detail = styled.span`
  font-size: 16px;
`;
