import React from "react";
import "./SignupForm.css";

const SignupForm = props => (
<div>
  <form action="/signup" className="col s12" method="post">
    <div className='row'>
      <div className='col s12'>
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
        <input className='validate' type='email' name='email' id='email' />
        <label for='email'>Enter your email</label>
      </div>
    </div>

    <div className='row'>
      <div className='input-field col s12'>
        <input className='validate' type='text' name='headshot' id='headshot' />
        <label for='headshot'>Profile Picture Link</label>
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
        <input className='validate' type='text' name='bio' id='bio' />
        <label for='bio'>Bio</label>
      </div>
    </div>


    <br />
      <div className='row'>
        <button type='submit' name='btn_login' className='col s12 btn btn-large waves-effect indigo'>Submit</button>
      </div>
  </form>
</div>
);

export default SignupForm;
