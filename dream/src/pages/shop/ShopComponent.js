import React from "react";
import SHOP_DATA from "./ShopData";

class ShopPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      collection: SHOP_DATA,
    };
  }

  render() {
    return <div>Shop Page</div>;
  }
}

export default ShopPage;
