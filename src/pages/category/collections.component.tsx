// @ts-nocheck
import React from "react";
import styled from "styled-components";
import CollectionItem from "../../components/collection-item/collection-item.component";
import { Collection } from "../../typescript-types/item-collection-types";

import { connect } from "react-redux";
import { selectCollection } from "../../redux/shop/shop.selectors";

const CollectionPage = ({ collection }: { collection: Collection }) => {
  const { title, items } = collection;
  return (
    <CollectionContainer>
      <Title>{title}</Title>
      <Items>
        {items.map((item) => (
          <CollectionItem
            key={item.id}
            item={item}
            style={{ marginBottom: "30px" }}
          />
        ))}
      </Items>
    </CollectionContainer>
  );
};

const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.collectionId)(state),
});

export default connect(mapStateToProps)(CollectionPage);

const CollectionContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const Title = styled.h2`
  font-size: 38px;
  margin: 0 auto 30px;
`;

const Items = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 10px;
`;
