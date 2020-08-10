import React from "react";
import "./App.css";
import Homepage from "./Pages/Homepage";
import { Switch, Route, Redirect } from "react-router-dom";
import RecipeDetailPage from "./Pages/RecipeDetailPage";
import LoginPage from "./Pages/LoginPage";
import SignupPage from "./Pages/SignupPage";
import Mealplanspage from "./Pages/Mealplanspage";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/recipe" component={RecipeDetailPage} />
        <Route exact path="/login" component={LoginPage} />
        <Route exact path="/signup" component={SignupPage} />
        <Route exact path="/mealplans" component={Mealplanspage} />
        <Redirect to="/" />
      </Switch>
    </div>
  );
}

export default App;
