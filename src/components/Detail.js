import React from "react";
import Information from "./Information";
import Data from "./data.json";

function Detail(props) {
  const data = Data.map((pos) => {
    return (
      <Information
        link={props.match.params.id}
        id={pos.ID}
        make={pos.Make}
        model={pos.Model}
        year={pos.Year}
        price={pos.Price}
        mileage={pos.Mileage}
      />
    );
  });
  return <div>{data}</div>;
}

export default Detail;
