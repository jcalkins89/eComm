import React from "react";
import styled from "styled-components";
import CollectionPreview from "../../components/collection-preview/collection-preview.component";

import SHOP_DATA from "../../mock-data/shop.data";

export type Item = {
  id: number;
  name: string;
  imageUrl: string;
  price: number;
  quantity?: number;
};

export type Collection = {
  id: number;
  title: string;
  routeName: string;
  items: Item[];
};

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
