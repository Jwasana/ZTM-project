import React from "react";
import Homepage from "./pages/homepage/homepageComponent";
import { Route, Switch } from "react-router-dom";
import ShopPage from "./pages/shop/ShopComponent";
import Header from "./components/header/HeaderComponent";
import "./App.css";

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/shop" component={ShopPage} />
      </Switch>
    </div>
  );
}

export default App;
