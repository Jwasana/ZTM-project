import React from "react";
import { withRouter } from "react-router";
import "./MenuItemComponent-style.scss";

const MenuItem = ({ title, imageUrl, size, history, linkUrl, match }) => {
  return (
    <div
      className={`${size} menu-item`}
      onClick={() => history.push(`${match.url}${linkUrl}`)}
    >
      <div
        className="background-image"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />

      <div className="content">
        <h1 className="title">{title.toLocaleUpperCase()}</h1>
        <span className="sub=title">SHOP NOW</span>
      </div>
    </div>
  );
};

export default withRouter(MenuItem);
