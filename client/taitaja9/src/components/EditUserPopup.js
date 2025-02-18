import React, { useState } from "react";
import Popup from "reactjs-popup";
import "../styles/EditUserPopup.css";

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

  function closePopup() {
    setUsername(name);
    setUserPassword(password);
    setUserRole(role);
  }

  return (
    <Popup
      trigger={<button className="edit-button">Muokkaa</button>}
      position={"bottom right"}
      onClose={closePopup}
    >
      {(close) => (
        <div className="modal">
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
