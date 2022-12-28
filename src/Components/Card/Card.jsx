import React from "react";

const Card = () => {
  return (
    <div className="card">
      <div className="fav">
        <img src="/media/dislike.svg" alt="dislike-icon" />
      </div>
      <img
        src="sneackers/sneacker1.jpg"
        alt="sneacker"
        width={133}
        height={112}
      />
      <h5>Men's sneackers Nike Blazer Mid Suede</h5>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <span>Price:</span>
          <b>123$</b>
        </div>
        <button className="add__btn">
          <img src="media/plus.svg" alt="plus" width={11} height={11} />
        </button>
      </div>
    </div>
  );
};

export default Card;
