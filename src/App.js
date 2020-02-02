import React from "react";
import "./styles.css";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import Badges from "./Badges";
import AutocompleteVideos from "./AutocompleteVideos";

export default function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <BrowserRouter>
        <Switch>
          <Route path="/" component={Badges} />
          <Route path="/autocomplete" component={AutocompleteVideos} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}
