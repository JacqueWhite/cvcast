import React from "react";
import "./TitleCard.css";


const TitleCard = props => (

<div>
	<div className="card">
	  <div className="card-image">
	    <img className="portfolio-banner responsive-img" src="https://s3.us-east-2.amazonaws.com/jacqueportfolio/purty_wood_%402X.png" alt="" />
	  </div>
	  <div className="card-content card-about">
	    <div className="row">
	      <div className="col s4"> 
	      <div className="profile-pic ratio img-responsive img-circle" style={{backgroundImage: `url(${props.headshot})`}}></div>
	      </div>

	    </div>
	    <span className="card-title black-text">{props.firstName} {props.lastName}</span>
	    <span className="card-title black-text email"><a href={`mailto:${props.email}`}>{props.email}</a> | <a href={props.linkedIn} target="_blank">View My LinkedIn</a> | <a href={props.gitHubProfile} target="_blank">GitHub</a></span>
	    <span className="black-text" id="edit-project">{props.bio}</span>
	  </div>
	</div>
</div>
);
export default TitleCard;

// <script type="text/javascript">
//       function showMenu() {
//         if ($('.menu').css("display") != "none") {
//           $('.menu').css("display", "none");
//         }
//         else{
//           $('.menu').css("display", "block");
//           $('.menu').addClass('animated bounceIn');
//         }
//       }
//     </script> 