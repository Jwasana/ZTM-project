import React from "react";
import { Route } from "react-router-dom";
import CollectionPage from "../collection/Collection";

import CollectionOveriew from "../../components/collections-overview/CollectionOveriew";

const ShopPage = ({ match }) => (
  <div className="shopPage">
    <Route path={`${match.path}`} component={CollectionOveriew} />
    <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
  </div>
);

export default ShopPage;
