import React from "react";
import "./CollectionPreview-style.scss";
import CollectionItemComponent from "../collection-item/CollectionItemComponent";

const CollectionPreview = ({ title, items }) => {
  return (
    <div className="collection-preview">
      <h1 className="title">{title.toLocaleUpperCase()}</h1>
      <div className="preview">
        {items
          .filter((item, idx) => idx < 4)
          .map((item) => (
            <CollectionItemComponent key={item.id} item={item} />
          ))}
      </div>
    </div>
  );
};

export default CollectionPreview;
