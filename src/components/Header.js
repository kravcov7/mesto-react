import React from "react";
import Logo from "../images/logo.svg";

function Header() {
  return (
    <header className="header root__section">
      <img src={Logo} alt="mesto logo" className="logo" />
    </header>
  );
}

export default Header;
