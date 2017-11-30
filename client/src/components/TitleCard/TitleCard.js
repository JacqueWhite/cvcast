import React from "react";
import "./TitleCard.css";


const TitleCard = props => (
<div>
	<div className="row">
		<div className="col s12">
			<div className="card title-card">
			  <div className="card-image cover-photo">
			    <img className="portfolio-banner responsive-img" src="https://s3.us-east-2.amazonaws.com/jacqueportfolio/purty_wood_%402X.png" alt="" />
			  <span className="card-title"><div className="profile-pic ratio img-responsive img-circle" style={{backgroundImage: `url(${props.headshot})`}}></div></span>
			  </div>
			    <div className="card-content">
			      <h4>{props.firstName} {props.lastName}</h4><br/>
			      <p><a href={`mailto:${props.email}`}>{props.email}</a> | <a href={props.linkedIn} target="_blank">View My LinkedIn</a> | <a href={props.gitHubProfile} target="_blank">GitHub</a></p><br/>
			      <p id="edit-project">{props.bio}</p>
			    </div>
			</div>
		</div>
	</div>
</div>
);
export default TitleCard;