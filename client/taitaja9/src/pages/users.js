import React from "react";
import "../styles/users.css";
import Navbar from "../components/Navbar";
import Footer from "../components/footr";
import UserContainer from "../components/UserContainer";
import AddUserPopup from "../components/AddUserPopup";

/*  
  Tällä hetkellä UserContainereissä placeholder tekstit. Suunnitelmana oli sivun ladatessa
  hakea käyttäjät databasesta ja täyttää lista UserContainereilla joissa on käyttäjien tiedot.
*/

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
          <UserContainer id="1" name="Miro" role="Admin" password="123" />
          <UserContainer id="2" name="Käyttäjä 1" role="User" password="456" />
          <UserContainer id="3" name="Admin 2" role="Admin" password="789" />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Users;
