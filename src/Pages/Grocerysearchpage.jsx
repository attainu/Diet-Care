import React from "react";
import Search from "../Components/Serachgroceryitem";
import "../CSS/Grocersearchpage.css";
import Groceryitems from "../Components/Grocerycards";
import Logo from "../images/dc-wb.png";

const Grocerysearchpage = () => {
  return (
    <div className="grocer_page">
      <div className="grocery-navbar">
        <img src={Logo} alt="logo" />
        <Search />
      </div>
      <Groceryitems />
    </div>
  );
};

export default Grocerysearchpage;
