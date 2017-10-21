import React from "react";
import {Button} from 'react-materialize';
import "./EditButton.css";

const EditButton = props => (
<div>
<Button floating large className='red' waves='light' icon='mode_edit'
  onClick={props.onClick}/>
</div>
);
export default EditButton;
