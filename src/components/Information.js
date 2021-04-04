import React from "react";
import Data from "./data.json";

function Information(props) {
  return (
    <div>
      <h1>Product Page</h1>
      <div>
        <h1>{props.make}</h1>
        <h1>{props.model}</h1>
        <h1>{props.year}</h1>
      </div>
      <h1>{props.model}</h1>
      <h1>{props.price}</h1>
      <h1>{props.mileage}</h1>
      <h1>{props.extcolor}</h1>
      <h1>{props.intcolor}</h1>
    </div>
  );
}

export default Information;
