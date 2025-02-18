import React from "react";
import Popup from "reactjs-popup";
import "../styles/AddUserPopup.css";

const AddUserPopup = () => {
  return (
    <Popup
      trigger={<button className="add-button">Lisää käyttäjä</button>}
      position={"bottom right"}
    >
      {(close) => (
        <div className="modal">
          <div className="add-user-input-container">
            <input
              type="text"
              className="add-user-input"
              placeholder="Nimi"
              id="name"
              name="name"
              autoComplete="new-password"
            ></input>
            <input
              type="password"
              className="add-user-input"
              placeholder="Salasana"
              id="password"
              name="password"
              autoComplete="new-password"
            ></input>
            <select className="add-user-select" name="role" id="role">
              <option value="" disabled selected>
                Rooli
              </option>
              <option value="Admin">Admin</option>
              <option value="User">User</option>
            </select>
          </div>
          <div className="add-user-button-container">
            <button className="add-user-button" onClick={close}>
              Takaisin
            </button>
            <button className="add-user-button" onClick={close}>
              Lisää
            </button>
          </div>
        </div>
      )}
    </Popup>
  );
};

export default AddUserPopup;
