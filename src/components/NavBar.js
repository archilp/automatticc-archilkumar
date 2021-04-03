import React from "react";
import "../index.css";

import { Link } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";

function NavBar() {
  return (
    // <div classNameName="nav-bar">
    //     <nav>
    //     <ul>
    //         <li><a href="">SEARCH CARS</a></li>
    //         <li><a href="">SELL/TRADE</a></li>
    //         <li><a href="">FINANCING</a></li>
    //         <li><a href="">ABOUT US</a></li>
    //         <li><a href="">CONTACT US</a></li>
    //         <li style={{float: "right", borderLeft: "5px solid black"}}><a href="" classNameName="login">LOG IN</a></li>
    //         <li style={{float: "right"}}><a href="" classNameName="signin">SIGN IN</a></li>
    //     </ul>
    //     </nav>
    // </div>

    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        {/* <a className="navbar-brand" href="#">
          <img
            src={logo}
            width="160"
            height="30"
            className="d-inline-block align-top"
            alt=""
          />
        </a> */}

        <Link to="/" className="navbar-brand" href="#">
          Automatticc
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto pl-5">
            <li className="nav-item active ">
              <Link to="/inventory" className="nav-link" href="#">
                Inventroy
              </Link>
            </li>
            <li className="nav-item active ">
              <Link to="/sell_trade" className="nav-link" href="#">
                Sell/Trade
              </Link>
            </li>
            <li className="nav-item active ">
              <Link to="/financing" className="nav-link" href="#">
                Financing
              </Link>
            </li>
            <li className="nav-item active ">
              <Link to="/aboutus" className="nav-link" href="#">
                About Us
              </Link>
            </li>
            <li className="nav-item active ">
              <Link to="/contactus" className="nav-link" href="#">
                Contact Us
              </Link>
            </li>
          </ul>
          <button className="btn btn-danger mr-2 my-2 my-sm-0" type="submit">
            Log In
          </button>
          <button className="btn btn-primary my-2 my-sm-0" type="submit">
            Sign In
          </button>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
