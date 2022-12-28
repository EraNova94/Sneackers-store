import React from "react";

const Header = () => {
  return (
    <header>
      <div className="header__left">
        <img src="media/logo.png" alt="main__logo" width={40} height={40} />
        <div className="header__info">
          <h3>Sneackers</h3>
          <p style={{ opacity: "0.5" }}>Store of best sneackers</p>
        </div>
      </div>
      <ul className="header__right">
        <li>
          <img
            src="media/cart.svg"
            alt="cart"
            width={18}
            height={18}
            style={{ marginRight: "10px" }}
          />
          <span>1205$</span>
        </li>
        <li>
          <img src="media/user.svg" alt="cart" width={18} height={18} />
        </li>
      </ul>
    </header>
  );
};

export default Header;
