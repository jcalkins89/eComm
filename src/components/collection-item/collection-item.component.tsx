import React from "react";
import styled from "styled-components";

const CollectionItem = ({
  name,
  price,
  imageUrl,
}: {
  name: string;
  price: number;
  imageUrl: string;
}) => {
  return (
    <CollectionItemContainer>
      <Image style={{ backgroundImage: `url(${imageUrl})` }} />
      <CollectionFooter>
        <Name>{name}</Name>
        <Price>{price}</Price>
      </CollectionFooter>
    </CollectionItemContainer>
  );
};

export default CollectionItem;

const CollectionItemContainer = styled.div`
  width: 22%;
  display: flex;
  flex-direction: column;
  height: 350px;
  align-items: center;
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
