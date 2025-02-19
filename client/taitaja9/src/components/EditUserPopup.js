import React, { useState } from "react";
import Popup from "reactjs-popup";
import "../styles/EditUserPopup.css";

/*
  Käyttäjän tietojen muokkaus popup.
  Pitää lisätä database yhteydet, 
  jotta voi oikeasti muuttaa käyttäjien tietoja
*/

const EditUserPopup = ({ name, role, id, password }) => {
  const [username, setUsername] = useState(name);
  const [userPassword, setUserPassword] = useState(password);
  const [userRole, setUserRole] = useState(role);

  function handleNameChange(e) {
    setUsername(e.target.value);
  }
  function handlePasswordChange(e) {
    setUserPassword(e.target.value);
  }
  function handleRoleChange(e) {
    setUserRole(e.target.value);
  }

  /*  
    Päivittää statet kun popupin sulkee, 
    jotta siellä on oikeat tiedot
  */
  function updateUserDataOnClose() {
    setUsername(name);
    setUserPassword(password);
    setUserRole(role);
  }

  function updateUser() {}

  function deleteUser() {}

  return (
    <Popup
      trigger={<button className="edit-button">Muokkaa</button>}
      position={"bottom right"}
      onClose={updateUserDataOnClose}
    >
      {(close) => (
        <div className="popup">
          <div className="edit-user-input-container">
            <input
              onChange={handleNameChange}
              type="text"
              className="edit-user-input"
              id="name"
              name="name"
              value={username}
              autoComplete="new-password"
            ></input>
            <input
              onChange={handlePasswordChange}
              type="password"
              className="edit-user-input"
              id="password"
              name="password"
              value={userPassword}
              autoComplete="new-password"
            ></input>
            <select
              onChange={handleRoleChange}
              className="edit-user-select"
              name="role"
              id="role"
              value={userRole}
            >
              <option value="Admin">Admin</option>
              <option value="User">User</option>
            </select>
          </div>
          <div className="edit-user-button-container">
            <button className="edit-user-button" onClick={close}>
              Takaisin
            </button>
            <button className="edit-user-button" onClick={close}>
              Poista käyttäjä
            </button>
            <button className="edit-user-button" onClick={close}>
              Tallenna
            </button>
          </div>
        </div>
      )}
    </Popup>
  );
};

export default EditUserPopup;
