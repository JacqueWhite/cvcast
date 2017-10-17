import React from "react";
import {Button, Modal, Icon} from 'react-materialize';
import "./Form.css";


const Form = props => (

	<Modal
	header='Modal Header'
	trigger={<Button waves='light'>OR ME!<Icon right>insert_chart</Icon></Button>}>
	<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
		incididunt ut labore et dolore magna aliqua.</p>
</Modal>	

);

export default Form;
