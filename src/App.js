import React from "react";
import "./App.css";
import Homepage from "./Pages/Homepage";
import { Switch, Route, Redirect } from "react-router-dom";
import RecipeDetailPage from "./Pages/RecipeDetailPage";
import LoginPage from "./Pages/LoginPage";
import SignupPage from "./Pages/SignupPage";
import Groceysearchpage from "./Pages/Grocerysearchpage";
import ShoppingPage from "./Pages/ShoppingPage";
import ShoppingDetailPage from "./Pages/ShoppingDetailPage";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/recipe/:recipeId" component={RecipeDetailPage} />
        <Route exact path="/login" component={LoginPage} />
        <Route exact path="/signup" component={SignupPage} />
        <Route exact path="/searchGroceryItem" component={Groceysearchpage} />
        <Route exact path="/shoplist" component={ShoppingPage} />
        <Route exact path="/shoplistDetail" component={ShoppingDetailPage} />
        <Redirect to="/" />
      </Switch>
    </div>
  );
}

export default App;
