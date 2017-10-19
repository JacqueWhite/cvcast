import React from "react";
import "./TitleCard.css";


const TitleCard = props => (

<div>
	<div className="card">
	  <div className="card-image">
	    <img className="portfolio-banner" src="https://s3.us-east-2.amazonaws.com/jacqueportfolio/purty_wood_%402X.png" alt="" />
	  </div>
	  <div className="card-content">
	    <div className="row">
	      <div className="col s4 profile-pic">
	        <img className="circle responsive-img" src={props.headshot} alt={props.name} />
	      </div>
	      <div className="col right controls ">

	        <i className="material-icons">more_vert</i>
	      </div>
	      <div className="row-menu">
	        <div className="menu">
	          <div className="row">
	            <ul className="menu-list">
	              <li><a href={props.email} target="_blank">Email {props.name}</a></li>
	              <li><a href={props.linkedIn} target="_blank">View LinkedIn</a></li>
	              <li>Get Resume</li>
	            </ul>
	          </div>
	        </div>
	      </div>
	    </div>
	    <span className="card-title black-text">{props.firstName}{props.lastName}</span>
	    <span className="card-title black-text email"><a href={`mailto:${props.email}`}>{props.email}</a> | <a href={props.linkedIn} target="_blank">View My LinkedIn</a></span>
	    <span className="black-text">{props.bio}</span>
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