import React from "react";
import "./Signup.css";

const Signup = props => (
<div>
  <div>
      <div className="container">
      <h5 className="indigo-text">Create an Account</h5>
        <div className="z-depth-1 grey lighten-4 row">

          <form className="col s12" method="post">
            <div className='row'>
              <div className='col s12'>
              </div>
            </div>

            <div className='row'>
              <div className='input-field col s12'>
                <input className='validate' type='email' name='email' id='email' />
                <label for='email'>Enter your email</label>
              </div>
            </div>

            <div className='row'>
              <div className='input-field col s12'>
                <input className='validate' type='password' name='password' id='password' />
                <label for='password'>Enter a password</label>
              </div>
            </div>

            <div className='row'>
              <div className='input-field col s12'>
                <input className='validate' type='text' name='firstName' id='firstName' />
                <label for='firstName'>First Name</label>
              </div>
            </div>

            <div className='row'>
              <div className='input-field col s12'>
                <input className='validate' type='text' name='lastName' id='lastName' />
                <label for='lastName'>Last Name</label>
              </div>
            </div>

            <div className='row'>
              <div className='input-field col s12'>
                <input className='validate' type='text' name='linkedIn' id='linkedIn' />
                <label for='linkedIn'>LinkedIn Profile Link</label>
              </div>
            </div>

            <div className='row'>
              <div className='input-field col s12'>
                <input className='validate' type='text' name='gitHub' id='gitHub' />
                <label for='gitHub'>GitHub Profile Link</label>
              </div>
            </div>

            <div className='row'>
              <div className='input-field col s12'>
                <input className='validate' type='text' name='headshot' id='headshot' />
                <label for='headshot'>Profile Picture Link</label>
              </div>
            </div>

            <br />
              <div className='row'>
                <button type='submit' name='btn_login' className='col s12 btn btn-large waves-effect indigo'>Submit</button>
              </div>
          </form>
        </div>
      </div>

</div>
</div>
);

export default Signup;
