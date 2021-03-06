import React from "react";
import { ReactComponent as ShoppingIcon } from "../../assests/shopping-bag.svg";
import { connect } from "react-redux";
import { CartToggeleHidden } from "../../redux/cart/CartActions";
import { selectCartItemCounts } from "../../redux/cart/CartSelectors";
import { createStructuredSelector } from "reselect";

import "./CartIcon-style.scss";

const CartIcon = ({ CartToggeleHidden, itemCount }) => (
  <div className="cart-icon" onClick={CartToggeleHidden}>
    <ShoppingIcon className="shoping-icon" />
    <span className="item-count">{itemCount}</span>
  </div>
);
const mapDispachToPrps = (dispatch) => ({
  CartToggeleHidden: () => dispatch(CartToggeleHidden()),
});
const mapStateToProps = createStructuredSelector({
  itemCount: selectCartItemCounts,
});
export default connect(mapStateToProps, mapDispachToPrps)(CartIcon);
