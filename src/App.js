import React from "react";
import { Buttons, Home, Header, Jumbotron } from "./pages/ts";
import { Switch, Route } from "react-router-dom";
import "./styles/app.css";
function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/buttons">
          <Buttons />
        </Route>
        <Route path="/header">
          <Header />
        </Route>
        <Route path="/jumbotron">
          <Jumbotron />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
