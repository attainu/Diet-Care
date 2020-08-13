import React from "react";
import Search from "../Components/Serachgroceryitem";
import "../CSS/Grocersearchpage.css";
import Groceryitems from "../Components/Grocerycards";

const Grocerysearchpage = () => {
  return (
    <div className="grocer_page">
      <div className="grocery-navbar">
        <Search />
      </div>
      <Groceryitems />
    </div>
  );
};

export default Grocerysearchpage;
