import React from "react";
import styled from "styled-components";
import CollectionPreview from "../../components/collection-preview/collection-preview.component";
import { Collection } from "../../typescript-types/item-collection-types";

import SHOP_DATA from "../../mock-data/shop.data";

type ShopPageState = {
  collections: Collection[];
};

class ShopPage extends React.Component<{}, ShopPageState> {
  constructor(props: {}) {
    super(props);

    this.state = {
      collections: SHOP_DATA,
    };
  }

  render() {
    const { collections } = this.state;

    return (
      <ShopPageContainer>
        {collections.map(({ id, ...otherCollectionProps }) => (
          <CollectionPreview key={id} {...otherCollectionProps} />
        ))}
      </ShopPageContainer>
    );
  }
}

export default ShopPage;

const ShopPageContainer = styled.div``;
