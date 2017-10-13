import React from "react";
import "./ProjectCard.css";

const ProjectCard = props => (
	<div className="card">
		<div className="img-container">
			<img alt={props.title} src={props.image}/>
		</div>
		<div className="content">
			<ul>
				<li>
					<strong>Title:</strong> {props.title}
				</li>
				<li>
					<strong>Link:</strong> {props.toplink}
				</li>
				<li>
					<strong>Tags:</strong> {props.tags}
				</li>
			</ul>
		</div>
	</div>
);

export default ProjectCard;