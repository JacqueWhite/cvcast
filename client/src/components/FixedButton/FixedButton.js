import React from "react";
import {Button} from 'react-materialize';
import "./FixedButton.css";

const FixedButton = props => (
<div>
<Button floating fab='vertical' faicon='fa fa-plus' icon='mode_edit' className='red' large style={{bottom: '45px', right: '24px'}}/>
</div>
);

export default FixedButton;

