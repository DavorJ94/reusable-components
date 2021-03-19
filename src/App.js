import React from "react";
import { Buttons, Home, Header, Jumbotron } from "./pages/ts";
import { Switch, Route } from "react-router-dom";
import "./styles/app.css";
function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/reusable-components-react/">
          <Home />
        </Route>
        <Route path="/reusable-components-react/buttons">
          <Buttons />
        </Route>
        <Route path="/reusable-components-react/header">
          <Header />
        </Route>
        <Route path="/reusable-components-react/jumbotron">
          <Jumbotron />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
