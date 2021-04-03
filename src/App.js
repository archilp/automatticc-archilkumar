import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "./components/Home";
import About from "./components/About";
import Inventory from "./components/Inventory";
import Detail from "./components/Detail";
import Information from "./components/Information";

function App() {
  return (
    <Switch>
      {" "}
      {/* The Switch decides which component to show based on the current URL.*/}
      <Route exact path="/" component={Home}></Route>
      <Route exact path="/aboutus" component={About}></Route>
      <Route exact path="/inventory" component={Inventory}></Route>
      <Route path="/inventory/:id" component={Detail}></Route>
    </Switch>
  );
}

export default App;
