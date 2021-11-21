import React from "react";
import { Route } from "react-router-dom";
import CollectionPage from "../collection/Collection";

import CollectionOveriew from "../../components/collections-overview/CollectionOveriew";

const ShopPage = ({ match }) => {
  console.log(match);
  return (
    <div className="shop-page">
      <Route exact path={`${match.path}`} component={CollectionOveriew} />
      <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
    </div>
  );
};

export default ShopPage;
