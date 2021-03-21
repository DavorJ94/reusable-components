import React from "react";
import { Buttons, Home, Header, Jumbotron, Spinner } from "./pages/ts";
import { Switch, Route } from "react-router-dom";
import "./styles/app.css";
function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/reusable-components">
          <Home />
        </Route>
        <Route path="/reusable-components/buttons">
          <Buttons />
        </Route>
        <Route path="/reusable-components/header">
          <Header />
        </Route>
        <Route path="/reusable-components/jumbotron">
          <Jumbotron />
        </Route>
        <Route path="/reusable-components/spinners">
          <Spinner />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
