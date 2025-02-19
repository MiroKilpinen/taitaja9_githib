import "../styles/UserContainer.css";
import EditUserPopup from "./EditUserPopup";

/*
  Laitetaan saadut propsit oikeisiin paikkoihin ja
  annetaan ne käyttäjän muokkaus popupille.
*/

function UserContainer({ id, name, role, password }) {
  const parentDataName = name;
  const parentDataRole = role;
  const parentDataId = id;
  const parentDataPassword = password;
  return (
    <div className="user-container">
      <div className="user-id">
        <p>{id}</p>
      </div>
      <div className="user-name">
        <p>{name}</p>
      </div>
      <div className="user-role">
        <p>{role}</p>
      </div>
      <EditUserPopup
        name={parentDataName}
        role={parentDataRole}
        id={parentDataId}
        password={parentDataPassword}
      />
    </div>
  );
}

export default UserContainer;
