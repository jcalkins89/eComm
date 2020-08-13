// @ts-nocheck
import React from "react";
import styled from "styled-components";
import CollectionItem from "../../components/collection-item/collection-item.component";

import { connect } from "react-redux";
import { selectCollection } from "../../redux/shop/shop.selectors";

const CollectionPage = ({ collection }) => {
  console.log("COLLECTION: ", collection);
  return (
    <CollectionContainer>
      <h2>CATEGORY PAGE</h2>
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
