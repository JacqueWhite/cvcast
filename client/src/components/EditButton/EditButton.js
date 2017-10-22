import React from "react";
import "./EditButton.css";

const EditButton = props => (
<div>
<a className="btn-floating waves-effect waves-light red" onClick={props.onClick}>
  <i className="material-icons">mode_edit</i>
</a>
</div>
);
export default EditButton;
