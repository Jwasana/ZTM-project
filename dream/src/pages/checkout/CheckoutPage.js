import React from "react";
import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";
//import CartItem from "../../components/cart-item/CartItem";

import "./Checkout-style.scss";
import {
  selectCartItems,
  selectCartTotal,
} from "../../redux/cart/CartSelectors";
import CheckoutItem from "../../components/checkout-item/CheckoutItem";
import StripeCheckoutButton from "../../components/stripe-button/StripeButton";

const CheckoutPage = ({ cartItems, total }) => (
  <div className="checkout-page">
    <div className="checkout-header">
      <div className="header-block">
        <span>Product</span>
      </div>
      <div className="header-block">
        <span>Description</span>
      </div>
      <div className="header-block">
        <span>Quantity</span>
      </div>
      <div className="header-block">
        <span>Price</span>
      </div>
      <div className="header-block">
        <span>Remove</span>
      </div>
    </div>
    {cartItems.map((cartItem) => (
      <CheckoutItem key={cartItem.id} cartItem={cartItem} />
    ))}
    <div className="total">TOTAL: ${total}</div>
    <div className="test-warning">
      *Please use following credit card to payment*
      <br />
      4242 4242 4242 4242 ex-01/20 CVV- 123
    </div>
    <StripeCheckoutButton price={total} />
  </div>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal,
});

export default connect(mapStateToProps)(CheckoutPage);
