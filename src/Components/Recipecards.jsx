import React from "react";
import Recipecarditem from "./Recipecarditem";
import "../CSS/Recipecards.css";

const Recipecards = () => {
  return (
    <div className="dietcare-recipe-cards">
      <Recipecarditem />
      <Recipecarditem />
      <Recipecarditem />
      <Recipecarditem />
    </div>
  );
};

export default Recipecards;
