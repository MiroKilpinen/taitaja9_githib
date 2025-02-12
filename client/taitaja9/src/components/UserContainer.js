import "../styles/UserContainer.css";
import EditUserPopup from "./EditUserPopup";

function UserContainer(props) {
  return (
    <div className="user-container">
      <div className="user-id">
        <p>{props.id}</p>
      </div>
      <div className="user-name">
        <p>{props.name}</p>
      </div>
      <div className="user-role">
        <p>{props.role}</p>
      </div>
      <EditUserPopup />
    </div>
  );
}

export default UserContainer;
