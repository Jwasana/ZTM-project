import React from "react";

import { ReactComponent as Logo } from "../../assests/crown.svg";
import { auth } from "../../firebase/firebase.utils";
import { connect } from "react-redux";
import CartIcon from "../cart-icon/CartIcon";
import CartDropdown from "../cart-dropdown/CartDropdown";
import { createStructuredSelector } from "reselect";
import { selectCartHidden } from "../../redux/cart/CartSelectors";
import { selectCurrentUser } from "../../redux/user/UserSelector";

import {
  HeaderContainer,
  LogoContainer,
  OptionsContainer,
  OptionLink,
} from "./header-style";

const Header = ({ currentUser, hidden }) => (
  <HeaderContainer>
    <LogoContainer to="/">
      <Logo className="logo" />
    </LogoContainer>

    <OptionsContainer>
      <OptionLink to="/shop">SHOP</OptionLink>
      <OptionLink to="/contact">CONTACT</OptionLink>
      {currentUser ? (
        <OptionLink as="div" onClick={() => auth.signOut()}>
          {" "}
          SIGN OUT
        </OptionLink>
      ) : (
        <OptionLink to="/signin">SIGN IN</OptionLink>
      )}
      <CartIcon />
    </OptionsContainer>
    {hidden ? null : <CartDropdown />}
  </HeaderContainer>
);
const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden,
});

export default connect(mapStateToProps)(Header);
