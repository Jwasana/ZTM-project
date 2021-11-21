import React from "react";
import { ReactComponent as ShoppingIcon } from "../../assests/shopping-bag.svg";
import { connect } from "react-redux";
import { CartToggeleHidden } from "../../redux/cart/CartActions";

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
const mapStateToProps = ({ cart: { cartItems } }) => ({
  itemCount: cartItems.reduce(
    (accumilatedQuantity, cartItem) => accumilatedQuantity + cartItem.quantity,
    0
  ),
});
export default connect(mapStateToProps, mapDispachToPrps)(CartIcon);
