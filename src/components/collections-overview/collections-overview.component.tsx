import React from "react";
import styled from "styled-components";

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCollectionsForPreview } from "../../redux/shop/shop.selectors";

import CollectionPreview from "../collection-preview/collection-preview.component";
import { Collection } from "../../typescript-types/item-collection-types";

const CollectionsOverview = ({
  collections,
}: {
  collections: Collection[];
}) => {
  return (
    <CollectionOverviewContainer>
      {collections.map(({ id, ...otherCollectionProps }) => (
        <CollectionPreview key={id} {...otherCollectionProps} />
      ))}
    </CollectionOverviewContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  collections: selectCollectionsForPreview,
});

export default connect(mapStateToProps)(CollectionsOverview);

const CollectionOverviewContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
