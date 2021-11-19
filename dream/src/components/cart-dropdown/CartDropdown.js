import React from "react";
import CustomButton from "../custom-button/CustomButton";

import "./CartDropdown-style.scss";

const CartDropdown = () => (
  <div className="cart-dropdown">
    <div className="cart-items" />
    <CustomButton>CHECKOUT</CustomButton>
  </div>
);

export default CartDropdown;
