import React from "react";
import "../styles/users.css";
import Navbar from "../components/Navbar";
import Footer from "../components/footr";
import UserContainer from "../components/UserContainer";
import AddUserPopup from "../components/AddUserPopup";

function Users() {
  return (
    <div className="users">
      <Navbar />
      <div className="users-header">
        <h2>Käyttäjät</h2>
        <AddUserPopup />
      </div>
      <div className="users-body">
        <div className="users-list">
          <UserContainer name="Miro" role="Admin" id="1" password="123" />
          <UserContainer name="Käyttäjä 1" role="User" id="2" password="456" />
          <UserContainer name="Admin 2" role="Admin" id="3" password="789" />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Users;
