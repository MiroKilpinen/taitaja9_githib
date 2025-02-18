import "../styles/UserContainer.css";
import EditUserPopup from "./EditUserPopup";

function UserContainer({ name, role, id, password }) {
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
