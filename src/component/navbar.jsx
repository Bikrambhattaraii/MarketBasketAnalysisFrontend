import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import '../styles/navbar.css'
export const Navbar = () => {
    const isUserSignedIn = !!localStorage.getItem("token");
    const navigate = useNavigate();

    const handleSignOut = () => {
      localStorage.removeItem("token");
      navigate("/login");
    };

  return (
    <>
      <nav className="main-nav-container">
        <Link to="/">
          <h1>Home</h1>
        </Link>
        <ul className="">
          {isUserSignedIn ? (
            <>
              <Link to="/account">
                <li>Account</li>
              </Link>
              <li>
                <button onClick={handleSignOut}>Sign Out</button>
              </li>
            </>
          ) : (
            <div className="second-container-nav">
              <Link to="/login">
                <li>Login</li>
              </Link>
              <Link to="/signup">
                <li>Signup</li>
              </Link>
            </div>
          )}
        </ul>
      </nav>
    </>
  );
};
