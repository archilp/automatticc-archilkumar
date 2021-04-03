import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import * as ReactBootStrap from "react-bootstrap";
import "../index.css";

function Search() {
  return (
    <div className="hey">
      <ReactBootStrap.Form>
        <ReactBootStrap.Form>
          <ReactBootStrap.Form.Group>
            <ReactBootStrap.Form.Control
              type="text"
              placeholder="Make, Model, or Keyword"
            />
          </ReactBootStrap.Form.Group>
          <ReactBootStrap.Button variant="primary" type="submit">
            Go
          </ReactBootStrap.Button>
        </ReactBootStrap.Form>
      </ReactBootStrap.Form>
    </div>
  );
}

export default Search;
