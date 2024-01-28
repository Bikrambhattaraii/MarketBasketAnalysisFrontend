import React, { useState } from "react";
import "../styles/HeaderStyle.css";
import { BiSolidDownArrow } from "react-icons/bi";


export const Header = () => {
  // const [open, setOpen] = useState(false);
  return (
    <header>
      <nav className="nav-container">
        <ul className="nav-items">
          <li>Home</li>
          <li>About</li>
          <li>
          
            Features <BiSolidDownArrow size={17} className="icon-dropdown"/>
            <ul className="options-list">
              <li>
                <div className="dropdown-options-list">
                    Anlaytics <p>upragde your reports with advance analytics</p>{" "}
                </div>
              </li>
              <li>
                <div className="dropdown-options-list">
                  Developer tools{" "}
                  <p>extend your application with developer tools</p>
                </div>{" "}
              </li>
              <li>
                <div className="dropdown-options-list">
                  Security and & compillance{" "}
                  <p>keep your data secure with our security feature</p>{" "}
                </div>{" "}
              </li>
              <li>
                <div className="dropdown-options-list">
                  Scalability{" "}
                  <p>scale your application with our infrastructure</p>
                </div>{" "}
              </li>
            </ul>
          </li>
          <li>Pricing</li>
          <li>
            resources
            <BiSolidDownArrow className="icon-dropdown" />

            <ul className="options-list resources">
            

              <li>
                <div className="options-list-resources-dropdown">
                  Blog posts
                  <p>Read Our latest Blogs</p>
                </div>
              </li>

              <li>
                <div className="options-list-resources-dropdown">
                  Case studies <p> read our case studies</p>
                </div>
              </li>
              <li>
                <div className="options-list-resources-dropdown">
                  Documentation <p> read our documentation</p>
                </div>
              </li>
              <li>
                <div className="options-list-resources-dropdown">
                  Help Center
                  <p>Contact for support</p>
                </div>
              </li>
            </ul>
          </li>
          <li>Contact</li>
        </ul>
      </nav>
    </header>
  );
};
