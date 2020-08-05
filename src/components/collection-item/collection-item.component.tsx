// @ts-nocheck
import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { addItem } from "../../redux/cart/cart.actions";
import { Item } from "../../pages/shop/shop.component";

const CollectionItem = ({
  item,
  addItem,
}: {
  item: Item;
  addItem?: () => void;
}) => {
  const { name, price, imageUrl } = item;

  return (
    <CollectionItemContainer>
      <Image
        style={{ backgroundImage: `url(${imageUrl})` }}
        className="image"
      />
      <CollectionFooter>
        <Name>{name}</Name>
        <Price>{price}</Price>
      </CollectionFooter>
      <CollectionItemButton
        onClick={() => addItem(item)}
        className="custom-button inverted"
      >
        Add to cart
      </CollectionItemButton>
    </CollectionItemContainer>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
});

export default connect(null, mapDispatchToProps)(CollectionItem);

const CollectionItemContainer = styled.div`
  width: 22%;
  display: flex;
  flex-direction: column;
  height: 350px;
  align-items: center;
  position: relative;

  &:hover {
    .image {
      opacity: 0.8;
    }

    .custom-button {
      opacity: 0.85;
      display: flex;
    }
  }
`;

const CollectionItemButton = styled.button`
  min-width: 165px;
  height: 50px;
  letter-spacing: 0.5px;
  line-height: 50px;
  padding: 0 35px 0 35px;
  font-size: 15px;
  background-color: black;
  color: white;
  text-transform: uppercase;
  font-family: "Open Sans Condensed";
  font-weight: bolder;
  border: none;
  cursor: pointer;
  justify-content: center;

  width: 80%;
  opacity: 0.7;
  position: absolute;
  top: 255px;
  display: none;

  &.inverted {
    background-color: white;
    color: black;
    border: 1px solid black;

    &:hover {
      background-color: black;
      color: white;
      border: none;
    }
  }
`;

const Image = styled.div`
  width: 100%;
  height: 95%;
  background-size: cover;
  background-position: center;
  margin-bottom: 5px;
`;

const CollectionFooter = styled.div`
  width: 100%;
  height: 5%;
  display: flex;
  justify-content: space-between;
  font-size: 18px;
`;

const Name = styled.span`
  width: 90%;
  margin-bottom: 15px;
`;

const Price = styled.span`
  width: 10%;
`;
