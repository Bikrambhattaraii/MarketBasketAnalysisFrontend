import React from "react";
import "../styles/Login.css";
export const Login = () => {
  return (
    <>
      <div className="container-signin">
        <div className="form-container">
          <h3>Acoount Login</h3>
          <input type="email"
           placeholder="Email" 
           className="form-input" />
          <input
            type="password"
            placeholder="Password"
            className="form-input"
          />
          <button className="btn-signin">SIGN IN </button>
        <p>
          forget <a href="">password</a>
        </p>
        <p>
          create an account? <a href="/signup">Sign Up</a>
        </p>
        </div>
      </div>
    </>
  );
};
