import React from "react";
import Navbar from "./component/Navbar";
import Ardi from "./Flow";
import { BrowserRouter, Route } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <Route exact path="/">
        <Navbar />
      </Route>
      <Route path="/about">
        <Navbar />
        <Ardi />
      </Route>
    </BrowserRouter>
  );
}

export default App;
