// @ts-nocheck
import { createSelector } from "reselect";
import { Collection } from "../../typescript-types/item-collection-types";
import memoize from "lodash.memoize";

const selectShop = (state: any) => state.shop;

export const selectCollections = createSelector(
  [selectShop],
  (shop) => shop.collections
);

export const selectCollectionsForPreview = createSelector(
  [selectCollections],
  (collections) => Object.keys(collections).map((key) => collections[key])
);

export const selectCollection = memoize((collectionUrlParam) =>
  createSelector(
    [selectCollections],
    (collections: Collection[]) => collections[collectionUrlParam]
  )
);
