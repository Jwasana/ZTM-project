import React from "react";
import "./DirectoryComponent-style.scss";
import MenuItem from "../menu-item/MenuItemComponent";
import { connect } from "react-redux";
import { createDirectorySections } from "../../redux/directory/DirectorySelector";
import { createStructuredSelector } from "reselect";

const Directory = ({ section }) => (
  <div className="directory-menu">
    {this.state.section.map(({ id, ...otherSectionProps }) => (
      <MenuItem key={id} {...otherSectionProps} />
    ))}
  </div>
);

const mapStateToProps = createStructuredSelector({
  section: createDirectorySections,
});

export default connect(mapStateToProps)(Directory);
