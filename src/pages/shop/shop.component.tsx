import React from "react";
import styled from "styled-components";
import CollectionsOverview from "../../components/collections-overview/collections-overview.component";

const ShopPage = () => {
  return (
    <ShopPageContainer>
      <CollectionsOverview />
    </ShopPageContainer>
  );
};

export default ShopPage;

const ShopPageContainer = styled.div``;
