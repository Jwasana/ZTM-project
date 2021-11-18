import React from "react";
import { ReactComponent as ShoppingIcon } from "../../assests/shopping-bag.svg";

import "./CartIcon-style.scss";

const CartIcon = () => (
  <div className="cart-icon">
    <ShoppingIcon className="shoping-icon" />
    <span className="item-count">0</span>
  </div>
);
export default CartIcon;
