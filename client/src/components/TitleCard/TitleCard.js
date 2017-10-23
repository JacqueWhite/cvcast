import React from "react";
import "./TitleCard.css";

const TitleCard = props => (
<div>
	<div className="card card-about">
	  <div className="card-image">
	    <img className="portfolio-banner responsive-img" src="https://s3.us-east-2.amazonaws.com/jacqueportfolio/purty_wood_%402X.png" alt="" />
	  </div>
	  <div className="card-content">
	    <div className="row">
	      <div className="col s4 profile-pic">
	        <img className="circle profile-img responsive-img" src={props.headshot} alt={props.firstName} />
	      </div>
	      <div className="col center controls">

	      </div>

	    </div>
	    <span className="card-title black-text">{props.firstName} {props.lastName}</span>
	    <span className="card-title black-text email"><a href={`mailto:${props.email}`}>{props.email}</a> | <a href={props.linkedIn} target="_blank">View My LinkedIn</a> | <a href={props.gitHubProfile} target="_blank">GitHub</a></span>
	    <span className="black-text">{props.bio}</span>
	  </div>
	</div>
</div>
);
export default TitleCard;