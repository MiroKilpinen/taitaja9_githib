import "../styles/UserContainer.css";

function UserContainer(props) {
  return (
    <div className="user-container">
      <div className="user-name">
        <p>{props.name}</p>
      </div>
      <div className="user-role">
        <p>{props.role}</p>
      </div>
      <button className="edit-user">Muokkaa</button>
    </div>
  );
}

export default UserContainer;
