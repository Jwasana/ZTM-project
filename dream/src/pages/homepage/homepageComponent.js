import React from "react";
import "./Hompage.scss";
import MenuItem from "../../components/menu-item/MenuItemComponent";
const Homepage = () => {
  return (
    <div className="homepage">
      <div className="directory-menu">
        <MenuItem title="HATS" />
        <div className="menu-item">
          <div className="content">
            <h1 className="title">JACKET</h1>
            <span className="sub=title">Shop NOW</span>
          </div>
        </div>
        <div className="menu-item">
          <div className="content">
            <h1 className="title">SNEAKERS</h1>
            <span className="sub=title">Shop NOW</span>
          </div>
        </div>

        <div className="menu-item">
          <div className="content">
            <h1 className="title">MENS</h1>
            <span className="sub=title">Shop NOW</span>
          </div>
        </div>
        <div className="menu-item">
          <div className="content">
            <h1 className="title">WOMENS</h1>
            <span className="sub-title">Shop NOW</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
