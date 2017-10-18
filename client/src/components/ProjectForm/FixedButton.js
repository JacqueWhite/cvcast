import React from "react";
import "./FixedButton.css";

const FixedButton = props => (
<div>
	<Row>
			<Input placeholder="Placeholder" s={6} label="First Name" />
			<Input s={6} label="Last Name" />
			<Input type="password" label="password" s={12} />
			<Input type="email" label="Email" s={12} />
	</Row>
</div>
);

export default FixedButton;