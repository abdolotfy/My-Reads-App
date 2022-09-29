import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Search from "./components/Search";

import "./index.css";
import Main from "./Main";
// routing between the main page and search page 
const Routes= () => (
  
  <Switch>
  <Route exact path="/">
    <Main />
  </Route>
  <Route path="/search"> 
    <Search />
  </Route>
</Switch>
);

ReactDOM.render(
  <Router>
    <Routes/>
  </Router>,
  document.getElementById("root")
);