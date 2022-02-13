import React, { useEffect, lazy } from "react";
import { Route } from "react-router-dom";
import { useDispatch } from "react-redux";

import { fetchCollectionsStart } from "../../redux/shop/shop.actions";

const CollectionPageContainer = lazy(() =>
  import("../collection/collection.container")
);

const CollectionsOverviewContainer = lazy(() =>
  import("../../components/collections-overview/collections-overview.container")
);

const ShopPage = ({ match }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCollectionsStart());
  }, [dispatch]);

  return (
    <div className="shop-page">
      <Route
        exact
        path={`${match.path}`}
        component={CollectionsOverviewContainer}
      />
      <Route
        path={`${match.path}/:collectionId`}
        component={CollectionPageContainer}
      />
    </div>
  );
};

export default ShopPage;
