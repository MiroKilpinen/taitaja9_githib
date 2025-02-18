import Navbar from "./components/Navbar";
import "./styles/App.css";
import Footer from "./components/footr";
import TeamContainer from "./components/TeamContainer";
import AppInfo from "./components/appInfo";
import React from 'react';

function App() {

  return (
    <div className="App">
      <Navbar />
      <div className="App-body">
        <AppInfo KilpailuNimi="Kilpailun nimi" rasti="#" RAika="rasti aika" Koulu1="koulu 1" Koulu2="koulu 2"/>
        <div className="teams-flex">
          <TeamContainer num="1" Tnimi="Tiimi nimi" Knimi="Koulu nimi" rastiAika="rastin aika" kokoAika="kokonaisaika" />
          <TeamContainer num="2" Tnimi="Tiimi nimi" Knimi="Koulu nimi" rastiAika="rastin aika" kokoAika="kokonaisaika" />
          <TeamContainer num="3" Tnimi="Tiimi nimi" Knimi="Koulu nimi" rastiAika="rastin aika" kokoAika="kokonaisaika" />
          <TeamContainer num="4" Tnimi="Tiimi nimi" Knimi="Koulu nimi" rastiAika="rastin aika" kokoAika="kokonaisaika" />
          <TeamContainer num="5" Tnimi="Tiimi nimi" Knimi="Koulu nimi" rastiAika="rastin aika" kokoAika="kokonaisaika" />
          <TeamContainer num="6" Tnimi="Tiimi nimi" Knimi="Koulu nimi" rastiAika="rastin aika" kokoAika="kokonaisaika" />
        </div>
      </div>
    </div>
  );
}

export default App;
