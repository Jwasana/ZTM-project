import React from "react";
import Homepage from "./pages/homepage/homepageComponent";
import { Route, Switch, Redirect } from "react-router-dom";
import ShopPage from "./pages/shop/ShopComponent";
import CheckoutPage from "./pages/checkout/CheckoutPage";
import Header from "./components/header/HeaderComponent";
import SIgninAndSignup from "./pages/signInAndSignup/SignInAndSignup";
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";
import "./App.css";
import { connect } from "react-redux";
import { setCurrentUser } from "./redux/user/UserAaction";
import { selectCurrentUser } from "./redux/user/UserSelector";
import { createStructuredSelector } from "reselect";

class App extends React.Component {
  unsubscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot((snapShot) => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data(),
          });
        });
      }
      setCurrentUser(userAuth);
    });
  }
  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route path="/shop" component={ShopPage} />
          <Route exact path="/checkout" component={CheckoutPage} />

          <Route
            exact
            path="/signin"
            render={() =>
              this.props.currentUser ? <Redirect to="/" /> : <SIgninAndSignup />
            }
          />
        </Switch>
      </div>
    );
  }
}
const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});
const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
