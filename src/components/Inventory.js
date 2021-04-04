import React from "react";
import NavBar from "./NavBar";
import Filter from "./Filter";
import { useState } from "react";
import Display from "./Display";

import "./display.css";

import Data from "./data.json";

function Inventory() {
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <div>
      <NavBar />
      <Filter />
      <input
        type="text"
        className="search-bar"
        placeholder="Search..."
        onChange={(event) => {
          setSearchTerm(event.target.value);
        }}
      />

      <br />
      <br />

      {Data.filter((val) => {
        if (searchTerm == "0") {
          return val;
        } else if (
          val.Make.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase()) ||
          val.Model.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase()) ||
          val.Year.toString().toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase())
        ) {
          return val;
        }
      }).map((val, key) => {
        return (
          <Display
            key={key}
            id={val.ID}
            make={val.Make}
            model={val.Model}
            year={val.Year}
            price={val.Price}
            mileage={val.Mileage}
            extcolor={val.ExteriorColor}
            intcolor={val.InteriorColor}
          />

          /////////////////////////////////////////////////
          // <div className="archil">
          //   <div className="cards">
          //     <Link to={`/inventory/${val.ID}`}>
          //       <img
          //         src="https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
          //         alt="carimage"
          //       />
          //     </Link>
          //     <div className="container">
          //       <h3>
          //         Make: {val.Make} Model: {val.Model} Year: {val.Year}
          //       </h3>
          //       <p>
          //         Price$: {val.Price} Mileage: {val.Mileage}
          //       </p>
          //     </div>
          //   </div>
          // </div>
          /////////////////////////////////////////////////
        );
      })}
    </div>
  );
}

export default Inventory;
