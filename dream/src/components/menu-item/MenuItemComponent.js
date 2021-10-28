import React from "react";
import "./MenuItemComponent-style.scss";

const MenuItem = ({ title, imageURL, size }) => {
  return (
    <div className={`${size} menu-item`}>
      <div
        className="background-image"
        style={{
          backgroundImage: `url(${imageURL})`,
        }}
      />

      <div className="content">
        <h1 className="title">{title}</h1>
        <span className="sub=title">SHOP NOW</span>
      </div>
    </div>
  );
};

export default MenuItem;
