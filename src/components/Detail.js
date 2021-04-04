// import React from "react";
// import Information from "./Information";
// import Data from "./data.json";

// function Detail(props) {
//   const data = Data.map((pos) => {
//     return (
//       <Information
//         link={props.match.params.id}
//         id={pos.ID}
//         make={pos.Make}
//         model={pos.Model}
//         year={pos.Year}
//         price={pos.Price}
//         mileage={pos.Mileage}
//         extcolor={pos.ExteriorColor}
//         intcolor={pos.InteriorColor}
//       />
//     );
//   });
//   return <div>{data}</div>;
// }

// export default Detail;

import React from "react";
import Data from "./data.json";
import Information from "./Information";
import ImageSlider from "./ImageSlider";
import { SliderData } from "./SliderData";
function Detail(props) {
  return (
    <div>
      <ImageSlider slides={SliderData} />
      {Data.filter((val) => {
        if (val.ID.toString() === props.match.params.id) {
          return val;
        }
      }).map((val, key) => {
        return (
          ////////////////////////////////////////////////
          <Information
            key={key}
            id={val.ID}
            make={val.Make}
            model={val.Model}
            year={val.Year}
            price={val.Price}
            mileage={val.Mileage}
            extcolor={val.ExteriorColor}
            intcolor={val.InteriorColor}
            trim={val.Trim}
            transmission={val.Transmission}
            bodytype={val.BodyType}
            drivetype={val.DriveType}
            fueltype={val.FuelType}
          />
          ////////////////////////////////////////////////
          // <div key={key}>
          //   <h1>{val.ID}</h1>
          //   <h1>{val.Year}</h1>
          //   <h1>{val.Make}</h1>
          //   <h1>{val.Model}</h1>
          //   <h1>{val.Price}</h1>
          //   <h1>{val.Trim}</h1>
          //   <h1>{val.ExteriorColor}</h1>
          //   <h1>{val.InteriorColor}</h1>
          //   <h1>{val.Transmission}</h1>
          //   <h1>{val.BodyType}</h1>
          //   <h1>{val.EngineType}</h1>
          //   <h1>{val.DriveType}</h1>
          //   <h1>{val.FuelType}</h1>
          // </div>
        );
      })}
    </div>
  );
}

export default Detail;
