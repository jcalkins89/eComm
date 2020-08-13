// @ts-nocheck
import { createSelector } from "reselect";
import { Collection } from "../../typescript-types/item-collection-types";
import memoize from "lodash.memoize";

const COLLECTION_ID_MAP = {
  hats: 1,
  sneakers: 2,
  jackets: 3,
  womens: 4,
  mens: 5,
};

const selectShop = (state: any) => state.shop;

export const selectCollections = createSelector(
  [selectShop],
  (shop) => shop.collections
);

export const selectCollection = memoize((collectionUrlParam) =>
  createSelector([selectCollections], (collections: Collection[]) =>
    collections.find(
      (collection: Collection) =>
        collection.id === COLLECTION_ID_MAP[collectionUrlParam]
    )
  )
);
