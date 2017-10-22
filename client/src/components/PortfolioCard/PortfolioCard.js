import React from "react";
import "./PortfolioCard.css";

const PortfolioCard = props => (
<div>
  <div className="row">
      <div className="col s12 m6">
          <div className="card">
              <div className="card-image waves-effect waves-block waves-light">
                  <img className="activator" src={props.image} alt={props.project}/>
              </div>
              <div className="card-content">
                  <span className="card-title activator grey-text text-darken-4">{props.project}<i className="material-icons right">arrow_forward</i></span>
                  <p><a href={props.link} target="_blank">See it Live</a></p>
                  <p>{props.description}</p>
              </div>
              <div className="card-action">
                  {props.technologiesKeywords.map(tag => (
                  <div className="chip"><a href={`/${tag}`} target="_blank">{tag}</a></div>
                  ))}
              </div>
              <div className="card-reveal">
                  <span className="card-title grey-text text-darken-4"><a href={props.link} target="_blank">{props.project}</a><i className="material-icons right">close</i></span>
                  <p><span className="about-project">What is it: </span><br/>{props.description}</p>
                  <p><span className="about-project">See the code on <a href={props.github} target="_blank"> GitHub</a></span></p>
                  <p><span className="about-project">Team: </span>{props.team}</p>
                  <hr/>
                  <p><span className="about-project">Technologies & Keywords: </span></p>
                  {props.technologiesKeywords.map(tag => (
                  <div className="chip"><a href={`/${tag}`} target="_blank">{tag}</a></div>
                  ))}
              </div>
          </div>
      </div>
  </div>
</div>
);
export default PortfolioCard;

