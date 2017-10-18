import React from "react";
import "./LoginForm.css";

const LoginForm = props => (
<div>
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
                <label for='password'>Enter your password</label>
            </div>
        </div>
        <br />
        <div className='row'>
          <button type='submit' name='btn_login' className='col s12 btn btn-large waves-effect indigo'>Login</button>
        </div>
    </form>
  </div>
);
export default LoginForm;
