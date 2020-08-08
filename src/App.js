import React from "react";
import "./App.css";
import Homepage from "./Pages/Homepage";
import {Switch, Route, Redirect} from "react-router-dom"
import RecipeDetailPage from "./Pages/RecipeDetailPage";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/home" component={Homepage}/>
        <Route exact path="/recipe" component={RecipeDetailPage}/>
        <Redirect to="/home"/>
      </Switch>
    </div>
  );
}

export default App;
