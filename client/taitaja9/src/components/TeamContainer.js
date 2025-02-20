import "../styles/TeamContainer.css";
import React from "react";

function rastitButton(a) {
  var x = document.getElementById("kaikkiRastit");
  var y = document.getElementById("näytäRastit");
  console.log(a)
  if (x.style.display === "none") {
    x.style.display = "block"; // avaa vain tiimi 1 rastit
    y.innerHTML = "&#9650;";
  } else {
    x.style.display = "none";
    y.innerHTML = "&#9660;";
  }
}

function TeamContainer(props) {
    return (
        <div className="team-container">
          <div className="team-num" id="teamNum">
            <h1>{props.num} #</h1>
          </div>
          <div className="team-nimet" id="teamNimet">
            <h2>{props.Tnimi}</h2>
            <h4>{props.Knimi}</h4>
          </div>
          <div className="team-rasti-aika" id="rastiAika">
            <h4>{props.rastiAika}</h4>
          </div>
          <div className="team-koko-aika" id="teamKokoAika">
            <h3>{props.kokoAika}</h3>
          </div>
          <div className="näytä-kaikki-rastit">
            <button onClick={rastitButton.bind(this, props.id)} id="näytäRastit">&#9660;</button>
          </div>
          <div className="team-kaikki-rastit" id="kaikkiRastit">
            <ol>
              <li>rasti aika</li>
              <li>rasti aika</li>
              <li>rasti aika</li>
            </ol>
          </div>
        </div>
        );
};

export default TeamContainer;