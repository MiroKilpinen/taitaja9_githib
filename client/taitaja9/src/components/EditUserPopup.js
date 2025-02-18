import React from "react";
import Popup from "reactjs-popup";
import "../styles/EditUserPopup.css";

const EditUserPopup = () => {
  return (
    <Popup
      trigger={<button className="edit-button">Muokkaa</button>}
      position={"bottom right"}
    >
      {(close) => (
        <div className="modal">
          <div className="edit-user-input-container">
            <input
              type="text"
              className="edit-user-input"
              placeholder="Nimi"
              id="name"
              name="name"
              autoComplete="new-password"
            ></input>
            <input
              type="password"
              className="edit-user-input"
              placeholder="Salasana"
              id="password"
              name="password"
              autoComplete="new-password"
            ></input>
            <select className="edit-user-select" name="role" id="role">
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
