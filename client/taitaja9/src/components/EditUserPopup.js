import React, { useState } from "react";
import "../styles/EditUserPopup.css";

const EditUserPopup = () => {
  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };
  const closePopup = () => setIsOpen(false);

  return (
    <div>
      <button className="edit-button" onClick={togglePopup}>
        Muokkaa
      </button>
      {isOpen && (
        <div className="dynamic-popup">
          <div className="edit-user-input-container">
            <input
              type="text"
              className="edit-user-input"
              placeholder="Nimi"
              id="name"
              name="name"
            ></input>
            <input
              type="password"
              className="edit-user-input"
              placeholder="Salasana"
              id="password"
              name="password"
            ></input>
            <input
              type="text"
              className="edit-user-input"
              placeholder="Rooli"
              id="role"
              name="role"
            ></input>
          </div>
          <div className="edit-user-button-container">
            <button className="edit-user-button" onClick={closePopup}>
              Takaisin
            </button>
            <button className="edit-user-button">Poista käyttäjä</button>
            <button className="edit-user-button">Tallenna</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default EditUserPopup;
