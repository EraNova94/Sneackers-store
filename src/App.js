import React from "react";
import Basket from "./Components/Basket/Basket";
import Card from "./Components/Card/Card";
import Header from "./Components/Header/Header";

const App = () => {
  return (
    <div className="wrapper">
      <Basket />
      <Header />
      <div className="content">
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "40px",
          }}>
          <h1>ALL</h1>
          <div className="search__block">
            <img src="/media/search.svg" alt="search" />
            <input placeholder="Search..." />
          </div>
        </div>
        <div className="sneackers">
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </div>
  );
};

export default App;
