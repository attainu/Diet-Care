import React from "react";
import Navbar from "../Components/Navbar";
import Sidebar from "../Components/Sidebar";
import "../CSS/Homepage.css";
import Recipecards from "../Components/Recipecards";

const Homepage = () => {
  return (
    <div>
      <Navbar />
      <section className="card-section">
        <Sidebar />
        <Recipecards />
      </section>
    </div>
  );
};

export default Homepage;
