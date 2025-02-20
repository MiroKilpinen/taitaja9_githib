import React from "react";
import "../styles/Navbar.css";
import { Link } from "react-router-dom";
import LoginPopup from "./LoginPopup";

function Navbar() {
  return (
    <div className="NavBar">
      <h1>Taitaja 9</h1>
      <ol>
        <li>
          <LoginPopup/>
        </li>
        <li>
          <Link to={"/Users"}>Käyttäjät</Link>
        </li>
        <li>
          <Link to={"/"}>Tulospalvelu</Link>
        </li>
      </ol>
    </div>
  );
}

export default Navbar;
