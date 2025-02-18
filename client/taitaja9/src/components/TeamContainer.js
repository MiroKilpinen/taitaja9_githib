import "../styles/TeamContainer.css";
import React from "react";

function open() {
  document.getElementById("kaikkiRastit").style.display="inline";
  document.getElementById("näytäRastit").style.display="none";
};

function close() {
  document.getElementById("kaikkiRastit").style.display="none";
  document.getElementById("näytäRastit").style.display="inline";
};

function TeamContainer(props) {
    return (
        <div className="team-container">
          <div className="team-num" id="teamNum">
            <h1>{props.num} #</h1>
          </div>
          <div className="team-nimet">
            <h2>{props.Tnimi}</h2>
            <h4>{props.Knimi}</h4>
          </div>
          <div className="team-rasti-aika" id="rastiAika">
            <h4>{props.rastiAika}</h4>
          </div>
          <div className="team-koko-aika">
            <h3>{props.kokoAika}</h3>
          </div>
          <div className="näytä-kaikki-rastit" id="näytäRastit">
            <button onClick={open}>&#9660;</button>
          </div>
          <div className="team-kaikki-rastit" id="kaikkiRastit">
            <ol>
              <li>rasti aika</li>
              <li>rasti aika</li>
              <li>rasti aika</li>
            </ol>
            <button onClick={close}>&#9650;</button>
          </div>
        </div>
        );
};

export default TeamContainer;