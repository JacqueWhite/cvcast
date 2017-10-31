import React, { Component } from "react";
import { findDOMNode } from "react-dom";
import $ from "jquery";

class StepAdd extends Component {

 componentDidMount() { 
   $('.stepper').activateStepper(); //Roll slider past initial fadein
 }

   render() {
      return (
      <div>
        <div>
         <ul className="stepper linear">
            <li className="step active">
               <div className="step-title waves-effect">E-mail</div>
               <div className="step-content">
                  <div className="row">
                     <div className="input-field col s12">
                        <input id="email" name="email" type="email" className="validate" required/>
                        <label htmlFor="first_name">Your e-mail</label>
                     </div>
                  </div>
                  <div className="step-actions">
                     <button className="waves-effect waves-dark btn next-step">CONTINUE</button>
                  </div>
               </div>
            </li>
            <li className="step">
               <div className="step-title waves-effect">Passo 2</div>
               <div className="step-content">
                  <div className="row">
                     <div className="input-field col s12">
                        <input id="password" name="password" type="password" className="validate" required/>
                        <label htmlFor="password">Your password</label>
                     </div>
                  </div>
                  <div className="step-actions">
                     <button className="waves-effect waves-dark btn next-step">CONTINUE</button>
                     <button className="waves-effect waves-dark btn-flat previous-step">BACK</button>
                  </div>
               </div>
            </li>
            <li className="step">
               <div className="step-title waves-effect">Fim!</div>
               <div className="step-content">
                  Finish!
                  <div className="step-actions">
                     <button className="waves-effect waves-dark btn" type="submit">SUBMIT</button>
                  </div>
               </div>
            </li>
         </ul>
       </div>
   </div>
      );
   }
}

export default StepAdd;
