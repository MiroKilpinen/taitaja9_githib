import React from "react";
import "../styles/users.css";
import Navbar from "../components/Navbar";
import Footer from "../components/footr";
import UserContainer from "../components/UserContainer";

function Users() {
  return (
    <div className="users">
      <Navbar />
      <div className="users-header">
        <h2>Käyttäjät</h2>
        <button className="add-user">Lisää käyttäjä</button>
      </div>
      <div className="users-body">
        <div className="users-list">
          <UserContainer name="Nimi" role="Rooli" id="1" />
          <UserContainer name="Nimi" role="Rooli" id="2" />
          <UserContainer name="Nimi" role="Rooli" id="3" />
          <UserContainer name="Nimi" role="Rooli" id="4" />
          <UserContainer name="Nimi" role="Rooli" id="5" />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Users;
