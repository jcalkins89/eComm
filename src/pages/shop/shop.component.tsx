import React from "react";
import styled from "styled-components";

import CollectionsOverview from "../../components/collections-overview/collections-overview.component";
import CollectionPage from "../category/collections.component";

import { Route } from "react-router-dom";

const ShopPage = ({ match }: { match: any }) => {
  return (
    <ShopPageContainer>
      <Route exact path={`${match.path}`} component={CollectionsOverview} />
      <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
    </ShopPageContainer>
  );
};

export default ShopPage;

const ShopPageContainer = styled.div``;
