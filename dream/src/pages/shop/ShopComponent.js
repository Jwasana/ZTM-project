import React from "react";
import { Route } from "react-router-dom";
import CategoryPage from "../category/Category";

import CollectionOveriew from "../../components/collections-overview/CollectionOveriew";

const ShopPage = ({ match }) => (
  <div className="shopPage">
    <Route path={`${match.path}`} component={CollectionOveriew} />
    <Route path={`${match.path}/:categoryId`} component={CategoryPage} />
  </div>
);

export default ShopPage;
