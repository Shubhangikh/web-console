import React from "react";

const Edit = props => {
  let classes = "fa fa-pencil-square-o";
  //if (!props.edited) classes += "-o";
  return (
    <i
      onClick={props.onClick}
      style={{ cursor: "pointer" }}
      className={classes}
      aria-hidden="true"
    />
  );
};

export default Edit;
