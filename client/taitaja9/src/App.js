import Navbar from "./components/Navbar";
import "./styles/App.css";
import Footer from "./components/footr";
import TeamContainer from "./components/TeamContainer";
import React from 'react';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="App-body">
        <div className="App-info">
          <span className="App-info-1"><span className="#">Kilpailun nimi</span></span>
          <span className="App-info-1">rasti <span className="#">#</span></span>
          <span className="App-info-1"><span className="#">rastin aika</span></span>
          <select className="App-info-2" id="AppInfo2">
            <option value="default" selected>Filter</option>
            <option value="nopeaEnsi">Nopein ensin</option>
            <option value="hidasEnsi">Hitain ensin</option>
            <option value="top5">TOP 5</option>
            <option value="koulu1">koulu1 nimi</option>
            <option value="koulu2">koulu2 nimi</option>
          </select>
        </div>
        <div className="teams-flex">
          <TeamContainer id="team" num="1" Tnimi="Tiimi nimi" Knimi="Koulu nimi" rastiAika="rastin aika" kokoAika="kokonaisaika" />
          <TeamContainer id="team" num="2" Tnimi="Tiimi nimi" Knimi="Koulu nimi" rastiAika="rastin aika" kokoAika="kokonaisaika" />
          <TeamContainer id="team" num="3" Tnimi="Tiimi nimi" Knimi="Koulu nimi" rastiAika="rastin aika" kokoAika="kokonaisaika" />
          <TeamContainer id="team" num="4" Tnimi="Tiimi nimi" Knimi="Koulu nimi" rastiAika="rastin aika" kokoAika="kokonaisaika" />
          <TeamContainer id="team" num="5" Tnimi="Tiimi nimi" Knimi="Koulu nimi" rastiAika="rastin aika" kokoAika="kokonaisaika" />
          <TeamContainer id="team" num="6" Tnimi="Tiimi nimi" Knimi="Koulu nimi" rastiAika="rastin aika" kokoAika="kokonaisaika" />
          <TeamContainer id="team" num="7" Tnimi="Tiimi nimi" Knimi="Koulu nimi" rastiAika="rastin aika" kokoAika="kokonaisaika" />
          <TeamContainer id="team" num="8" Tnimi="Tiimi nimi" Knimi="Koulu nimi" rastiAika="rastin aika" kokoAika="kokonaisaika" />
          <TeamContainer id="team" num="9" Tnimi="Tiimi nimi" Knimi="Koulu nimi" rastiAika="rastin aika" kokoAika="kokonaisaika" />
          <TeamContainer id="team" num="10" Tnimi="Tiimi nimi" Knimi="Koulu nimi" rastiAika="rastin aika" kokoAika="kokonaisaika" />
          <TeamContainer id="team" num="11" Tnimi="Tiimi nimi" Knimi="Koulu nimi" rastiAika="rastin aika" kokoAika="kokonaisaika" />
          <TeamContainer id="team" num="12" Tnimi="Tiimi nimi" Knimi="Koulu nimi" rastiAika="rastin aika" kokoAika="kokonaisaika" />
          <TeamContainer id="team" num="13" Tnimi="Tiimi nimi" Knimi="Koulu nimi" rastiAika="rastin aika" kokoAika="kokonaisaika" />
          <TeamContainer id="team" num="14" Tnimi="Tiimi nimi" Knimi="Koulu nimi" rastiAika="rastin aika" kokoAika="kokonaisaika" />
          <TeamContainer id="team" num="15" Tnimi="Tiimi nimi" Knimi="Koulu nimi" rastiAika="rastin aika" kokoAika="kokonaisaika" />
          <TeamContainer id="team" num="16" Tnimi="Tiimi nimi" Knimi="Koulu nimi" rastiAika="rastin aika" kokoAika="kokonaisaika" />
          <TeamContainer id="team" num="17" Tnimi="Tiimi nimi" Knimi="Koulu nimi" rastiAika="rastin aika" kokoAika="kokonaisaika" />
          <TeamContainer id="team" num="18" Tnimi="Tiimi nimi" Knimi="Koulu nimi" rastiAika="rastin aika" kokoAika="kokonaisaika" />
          <TeamContainer id="team" num="19" Tnimi="Tiimi nimi" Knimi="Koulu nimi" rastiAika="rastin aika" kokoAika="kokonaisaika" />
          <TeamContainer id="team" num="20" Tnimi="Tiimi nimi" Knimi="Koulu nimi" rastiAika="rastin aika" kokoAika="kokonaisaika" />
        </div>
      </div>
    </div>
  );
}

export default App;
