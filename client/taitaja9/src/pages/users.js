import React from "react";
import "../styles/users.css";
import Navbar from "../components/Navbar";
import Footer from "../components/footr";

function Users() {
  return (
    <div className="users">
      <head>
        <link
          href="https://fonts.googleapis.com/css?family=Jaro"
          rel="stylesheet"
        />
      </head>
      <Navbar />
      <div className="user-header">
        <h2>Käyttäjät</h2>
        <button className="add-user">Lisää käyttäjä</button>
      </div>
      <div className="users-body">
        <div className="users-list">
          <div className="user-container">
            <div className="user-name">
              <p>Nimi</p>
            </div>
            <div className="user-role">
              <p>Rooli</p>
            </div>
            <button className="edit-user">Muokkaa</button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Users;
