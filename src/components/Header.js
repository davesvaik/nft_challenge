import React from "react";
import "./Header.css";
import punkLogo from "../assets/header/cryptopunk-logo.png";
import searchIcon from "../assets/header/search.png";
import themeSwitchIcon from "../assets/header/theme-switch.png";

const Header = () => {
  return (
    <div className="header">
      <div className="logoContainer">
        <img src={punkLogo} className="punkLogo" alt="" />
        {/* adding header logo  */}
      </div>

      <div className="searchBar">
        <div className="searchIconContainer">
          <img src={searchIcon} className="searchIcon" alt="" />
          {/* adding search icon  */}
        </div>
        <input
          className="searchInput"
          placeholder="Collection, item or user..."
        />
        {/* adding input bar and text  */}
      </div>
      <div className="headerItems">
        <p>Drops</p>
        <p>Marketplace</p>
        <p>Create</p>
        {/* added links to 3 new pages  */}
      </div>
      <div className="headerActions">
        <div className="themeSwitchContainer">
          <img src={themeSwitchIcon} alt="" />
        </div>
      </div>
      <div className="loginButton">GET IN</div>
    </div>
  );
};

export default Header;
