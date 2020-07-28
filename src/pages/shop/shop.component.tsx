import React from "react";
import styled from "styled-components";
import CollectionPreview from "../../components/preview-collection/preview-collection.component";

import SHOP_DATA from "./shop.data";

export type Item = {
  id: number;
  name: string;
  imageUrl: string;
  price: number;
};

type Collection = {
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
