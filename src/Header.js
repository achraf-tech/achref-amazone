import React from "react";
import "./Header.css";
import logo from "./image/achref.png";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="header">
      <Link to="/">
        <img className="header__logo" src={logo} />
      </Link>

      <div className="header__search">
        <input className="header__searchInput" type="text" />
        <SearchIcon className="header__searchIcon" />
      </div>
      <div className="header__nav">
        <div className="header__option">
          <span className="header__optionlineone"> hello sonny </span>
          <span className="header__optionlintwo"> sign In </span>
        </div>
        <div className="header__option">
          <span className="header__optionlineone"> Returns </span>
          <span className="header__optionlintwo"> &Orders </span>
        </div>
        <div className="header__option">
          <span className="header__optionlineone"> Your </span>
          <span className="header__optionlintwo"> Primer </span>
        </div>
        <Link to="/checkout">
          <div className="header__optionBasket">
            <ShoppingBasketIcon />
            <span className="header__optionlinetwo header__basketCount">0</span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
