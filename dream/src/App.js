import React from "react";
import Homepage from "./pages/homepage/homepageComponent";
import { Route, Switch } from "react-router-dom";
import ShopPage from "./pages/shop/ShopComponent";
import Header from "./components/header/HeaderComponent";
import SIgninAndSignup from "./pages/signInAndSignup/SignInAndSignup";
import { auth } from "./firebase/firebase.utils";
import "./App.css";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      currentUser: null,
    };
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged((user) => {
      this.setState({ currentUser: user });
      console.log(user);
    });
  }
  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route path="/shop" component={ShopPage} />
          <Route path="/signin" component={SIgninAndSignup} />
        </Switch>
      </div>
    );
  }
}

export default App;
