import React from "react";
import { ReactComponent as ShoppingIcon } from "../../assests/shopping-bag.svg";
import { connect } from "react-redux";
import { CartToggeleHidden } from "../../redux/cart/CartActions";

import "./CartIcon-style.scss";

const CartIcon = ({ CartToggeleHidden }) => (
  <div className="cart-icon" onClick={CartToggeleHidden}>
    <ShoppingIcon className="shoping-icon" />
    <span className="item-count">0</span>
  </div>
);
const mapDispachToPrps = (dispatch) => ({
  CartToggeleHidden: () => dispatch(CartToggeleHidden()),
});
export default connect(null, mapDispachToPrps)(CartIcon);
