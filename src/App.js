import React from "react";
import { Buttons, Home, Header } from "./pages/ts";
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
      </Switch>
    </div>
  );
}

export default App;
