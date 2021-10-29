import React from "react";
import Homepage from "./pages/homepage/homepageComponent";
import { Route, Switch } from "react-router-dom";

const HatsPage = () => {
  return (
    <div>
      <h1>HATS APGE</h1>
    </div>
  );
};

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/hats" component={HatsPage} />
      </Switch>
    </div>
  );
}

export default App;
