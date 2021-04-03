import React, { useState } from "react";
import "./display.css";

import Modal from "react-modal";

import "./Modal.css";

import { Link } from "react-router-dom";

Modal.setAppElement("#root");
function Display(props) {
  console.log(props);

  const hello = {
    ID: props.id,
    MODEL: props.model,
    MAKE: props.make,
    YEAR: props.year,
    PRICE: props.price,
    MILEAGE: props.mileage,
    EXTECOLOR: props.extcolor,
    INTECOLOR: props.intcolor,
  };

  console.log(hello.EXTECOLOR);

  const [isShown, setIsShown] = useState(false);

  const hey = props;

  const [modalIsOpen, setModalIsOpen] = useState(false);

  // const nir = props;
  // console.log(nir);
  // console.log(nir.id);

  return (
    // <div className="row center">
    //   <div className="card">
    //     <Link to={`/inventory/${props.id}`}>
    //       {/* image size 680px by 830px */}
    //       <img
    //         src="https://images.pexels.com/photos/112460/pexels-photo-112460.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
    //         alt="carimage"
    //       />
    //     </Link>
    //     <div className="card-body">
    //       <div className="maininfo">
    //         <p>
    //           Make: {props.make} Model: {props.model} Year: {props.year}
    //         </p>
    //       </div>

    //       <div className="price">
    //         <h3>Price$: {props.price}</h3>
    //       </div>

    //       <div className="mileage">
    //         <p>Mileage: {props.mileage}</p>
    //       </div>
    //     </div>
    //   </div>
    // </div>

    <div className="archil">
      <div
        className="cards"
        // onMouseEnter={() => setIsShown(true)}
        // onMouseLeave={() => setIsShown(false)}
        onMouseEnter={() => setModalIsOpen(true)}
        // onMouseLeave={() => setModalIsOpen(false)}
      >
        <Link to={`/inventory/${props.id}`}>
          {/* image size 680px by 830px */}
          <img
            src="https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
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
      {/* {isShown && (
        <div className="hover-each">
          <p>
            Exterior Color: {props.extcolor} Interior Color: {props.intcolor}
          </p>
        </div>
      )} */}

      <div className="modal">
        <Modal isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)}>
          <div className="modal-wrapper">
            <div className="modal-content"></div>
          </div>

          <div className="moreinfohover">
            <img
              src="https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              alt="carimage"
            />
            <h5>Make: {hello.MAKE}</h5>
            <h5>Model: {hello.MODEL}</h5>
            <h5>Year: {hello.YEAR}</h5>
            <h5>Price: {hello.PRICE}</h5>
            <h5>Mileage Color: {hello.MILEAGE}</h5>
            <h5>Exterior Color: {hello.EXTECOLOR}</h5>
            <h5>Interior Color: {hello.INTECOLOR}</h5>
          </div>

          {/* <p>
          Exterior Color: {hello.ID} Interior Color: {props.intcolor}
        </p> */}
        </Modal>
      </div>
    </div>
  );
}

export default Display;
