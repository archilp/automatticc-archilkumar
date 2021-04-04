import React, { useState } from "react";
import "./display.css";
import { Link } from "react-router-dom";

function Display(props) {
  return (
    <div className="archil">
      <div className="cards">
        <Link to={`/inventory/${props.id}`}>
          <img
            src="https://images.unsplash.com/photo-1552519507-da3b142c6e3d?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2Fyc3xlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80"
            alt="carimage"
          />
        </Link>
        <div className="container">
          <h3>
            Make: {props.make} Model: {props.model} Year: {props.year}
          </h3>
          <p>
            Price$: {props.price} Mileage: {props.mileage}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Display;
