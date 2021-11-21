import React from "react";
import { connect } from "react-redux";
import CustomButton from "../custom-button/CustomButton";
import CartItem from "../cart-item/CartItem";
import { selectCartItems } from "../../redux/cart/CartSelectors";
import { CartToggeleHidden } from "../../redux/cart/CartActions";
import { createStructuredSelector } from "reselect";
import { withRouter } from "react-router-dom";

import "./CartDropdown-style.scss";

const CartDropdown = ({ cartItems, history, dispatch }) => (
  <div className="cart-dropdown">
    <div className="cart-items">
      {cartItems.length ? (
        cartItems.map((cartItem) => (
          <CartItem key={cartItem.id} item={cartItem} />
        ))
      ) : (
        <span className="empty-message"> Your cart is empty</span>
      )}
    </div>
    <CustomButton
      onClick={() => {
        history.push("/checkout");
        dispatch(CartToggeleHidden());
      }}
    >
      CHECKOUT
    </CustomButton>
  </div>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
});

export default withRouter(connect(mapStateToProps)(CartDropdown));
