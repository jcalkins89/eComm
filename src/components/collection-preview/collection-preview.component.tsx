import React from "react";
import styled from "styled-components";
import { Item } from "../../typescript-types/item-collection-types";
import CollectionItem from "../collection-item/collection-item.component";

const CollectionPreview = ({
  title,
  items,
}: {
  title: string;
  items: Array<Item>;
}) => {
  return (
    <CollectionPreviewContainer>
      <Title>{title.toUpperCase()}</Title>
      <Preview>
        {items
          .filter((item, idx) => idx < 4)
          .map((item) => (
            <CollectionItem key={item.id} item={item} />
          ))}
      </Preview>
    </CollectionPreviewContainer>
  );
};

export default CollectionPreview;

const CollectionPreviewContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
`;

const Preview = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Title = styled.h1`
  font-size: 28px;
  margin-bottom: 25px;
`;
