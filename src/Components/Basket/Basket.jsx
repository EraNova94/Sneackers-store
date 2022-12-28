import React from "react";

const Basket = () => {
  return (
    <div className="overlay__basket">
      <div className="basket">
        <h2
          style={{
            marginBottom: "30px",
            display: "flex",
            justifyContent: "space-between",
          }}>
          Basket{" "}
          <img
            src="media/cancel-btn.svg"
            alt="Cancel"
            style={{ cursor: "pointer" }}
          />
        </h2>

        <div className="items">
          <div className="basket__item">
            <div
              className="basket__item-img"
              style={{
                backgroundImage: "url(sneackers/sneacker1.jpg)",
              }}></div>
            <div style={{ marginRight: "20px" }}>
              <p>Men's sneackers Nike Air Max 270</p>
              <b>123$</b>
            </div>
            <img
              src="media/cancel-btn.svg"
              alt="Cancel"
              className="cancel__btn"
            />
          </div>

          <div className="basket__item">
            <div
              className="basket__item-img"
              style={{
                backgroundImage: "url(sneackers/sneacker1.jpg)",
              }}></div>
            <div style={{ marginRight: "20px" }}>
              <p>Men's sneackers Nike Air Max 270</p>
              <b>123$</b>
            </div>
            <img
              src="media/cancel-btn.svg"
              alt="Cancel"
              className="cancel__btn"
            />
          </div>
        </div>
        <div className="basket__total-block">
          <ul>
            <li>
              <span>Total</span>
              <div></div>
              <b>321$</b>
            </li>
            <li>
              <span>Tax 5%</span>
              <div></div>
              <b>12$</b>
            </li>
          </ul>
          <button className="checkout__btn">
            Checkout <img src="media/arrow.svg" alt="arrow-icon" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Basket;
