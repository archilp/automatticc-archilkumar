import React from "react";
import Data from "./data.json";

function Information(props) {
  const hey = props;
  const blah = props.link;

  if (hey.id == blah) {
    console.log("babbbyyy");
    return (
      <div>
        <h1>Product Page</h1>
        <h1>{hey.model}</h1>
        <h1>{hey.id}</h1>
        <h1>{hey.make}</h1>
        <h1>{hey.year}</h1>
        <h1>{hey.model}</h1>
        <h1>{hey.price}</h1>
        <h1>{hey.mileage}</h1>
      </div>
    );
  } else {
    console.log("wtf");
    return (
      <div>
        <h1>Prossssduct Page</h1>
      </div>
    );
  }

  // iterate over each element in the array
  // for (var i = 0; i < hey.length; i++) {
  //   // look for the entry with a matching `code` value
  //   if (hey[i].id == blah) {
  //     // we found it
  //     // obj[i].name is the matched result
  //     return;
  //     <h1>Product Page</h1>;
  //   }
  // }

  // console.log(hey);
  // // console.log(hey.link);
  // // console.log("hey " + hey.id);
  // return (
  //   <div>
  //     <h1>Product Page</h1>
  //   </div>
  // );
}

export default Information;
