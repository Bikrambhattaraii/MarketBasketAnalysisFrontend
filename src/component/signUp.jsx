import React from "react";
import { FaUserNinja, FaEnvelope, FaLock } from "react-icons/fa6";
import "../styles/signUp.css";
import ButtonComponent from "./buttonComponent";
export const SignUp = () => {
  return (
    <>
      <div className="container-signup">
        <div className="signup-container-form">
          <h3>Sign Up</h3>
          <div className="username-container">
            <FaUserNinja className="icons-signup" />
            <input type="text" placeholder="enter your username" name="username" className="inputs-signup" />
          </div>
          <div className="email-container">
            <span>
            <FaEnvelope  className="icons-signup"/>
         </span>   <input 
              type="email"
              placeholder="enter your registered email"
              name="email"
              className="inputs-signup"
            />
          </div>
          <div className="password-container">
            <FaLock className="icons-signup"/>
            <input
              type="password"
              placeholder="enter your passowrd"
              className="inputs-signup"
            />
          </div>
          <div className="confirm-pw-container">
            <FaLock className="icons-signup"/>
            <input
              type="password"
              placeholder="enter your passowrd"
              className="inputs-signup"
            />
          </div>
          <div className="aggreement-signup">
            <input type="checkbox" />
            <p>i agree to all the terms <br /> and aggreements</p>
          </div>
          <ButtonComponent style={{}} text="jelllo"  />
        </div>
      </div>
    </>
  );
};
