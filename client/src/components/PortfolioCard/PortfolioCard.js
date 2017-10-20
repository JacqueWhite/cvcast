import React from "react";
import "./PortfolioCard.css";

const PortfolioCard = props => (
<div>

  <div className="row">
    <div className="col s12 m6">
      <div className="card">

          <div className="card-image waves-effect waves-block waves-light">
            <img className="activator responsive-img" src={props.image}/>
          </div>

          <div className="card-content">
            <span className="card-title activator grey-text text-darken-4">{props.project}<i className="material-icons right">more_vert</i></span>
            <p><a href={props.link}>See it Live</a></p>

            <div>
            <div>
            {props.technologiesKeywords.map(tag => (
             <div><div className="chip" href={tag}>{tag}</div></div>
            </div>
            </div>
 
          </div>

          <div className="card-reveal">
            <span className="card-title grey-text text-darken-4">{props.project}<i className="material-icons right">close</i></span>
            <p>{props.description}</p>
          </div>

      </div>
    </div>
  </div>

</div>
);
export default PortfolioCard;


//       <Card 
//         header={
//           <CardTitle 
//             reveal image={className="activator responsive-img" src={props.image}} 
//             waves='light'
//           />
//         }
//         title={props.project}
//         reveal={
//           <div>
//             <p>{props.description}</p>
//           </div>}>
//           <p><a href={props.link}>See it Live</a></p>
//           {props.technologiesKeywords.map(tag => (
//           <Button 
//             waves='light' 
//             node='a' 
//             href={tag}
//             > 
//               {tag} 
//             </Button>
//             ))}
//       </Card>
//    </Col>
// </div>
// );
// export default PortfolioCard;

