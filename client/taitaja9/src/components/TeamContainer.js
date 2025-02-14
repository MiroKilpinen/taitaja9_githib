import "../styles/TeamContainer.css";

function TeamContainer(props) {
    return (
        <div className="team-container">
          <div className="team-num">
            <h1>{props.num} #</h1>
          </div>
          <div className="team-nimet">
            <h2>{props.Tnimi}</h2>
            <h4>{props.Knimi}</h4>
          </div>
          <div className="team-rasti-aika">
            <h4>{props.rastiAika}</h4>
          </div>
          <div className="team-koko-aika">
            <h3>{props.kokoAika}</h3>
          </div>
        </div>
        );
};

export default TeamContainer;