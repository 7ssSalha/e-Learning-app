import React, { Component } from "react";
class Signin extends Component {
  render() {
    return (
      <div className=" login container  " >
        <div className="card collection center valign">
        <div className="row ">
          <h4>SignUp</h4>
        </div>
        <div className="row ">
            <div className="input-field">
                <i className="material-icons prefix">account_circle</i>
                <input type="text" name="Email" id="Email_log" />
                <label htmlFor="Email_log">First Name</label>
            </div>
            <div className="input-field">
                <i className="material-icons prefix">account_circle</i>
                <input type="text" name="Email" id="Email_log" />
                <label htmlFor="Email_log">Last Name</label>
            </div>
            <div className="input-field">
                <i className="material-icons prefix">account_circle</i>
                <input type="text" name="Email" id="Email_log" />
                <label htmlFor="Email_log">UserName</label>
            </div>
          <div className="input-field">
            <i className="material-icons prefix">email</i>
            <input type="text" name="Email" id="Email_log" />
            <label htmlFor="Email_log">Email</label>
          </div>

          <div className="input-field">
            <i className="material-icons prefix">lock</i>
            <input type="Password" name="Password" id="Password_log" />
            <label htmlFor="Password_log">Password</label>
          </div>
          <div className="input-field">
            <i className="material-icons prefix">lock</i>
            <input type="Password" name="Password" id="Password_log" />
            <label htmlFor="Password_log">Confirm Password</label>
          </div>
          <div className="center">
            {/* <a
              className="btn blue-grey waves-effect "
              style={{ width: "50%", textTransform: "none" }}
            >
              Sign in
            </a> */}
            <a  className="btn light-blue waves-effect" 
                style={{ width: "50%", textTransform: "none" }}
            >
                Signup
            </a>
          </div>
        </div>
        </div>
        </div>
      
    );
  }
}
export default Signin;
