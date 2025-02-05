import React from "react";
import "../styles/Navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="NavBar">
      <h1>Taitaja 9</h1>
      <ol>
        <li>Kirjaudu ulos(temp)</li>
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
