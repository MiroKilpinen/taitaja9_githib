import Navbar from "./components/Navbar";
import "./styles/App.css";

function App() {
  return (
    <div className="App">
      <head>
        <link
          href="https://fonts.googleapis.com/css?family=Jaro"
          rel="stylesheet"
        />
      </head>
      <Navbar />
      <div className="App-body">
        <div className="App-info">
          <span className="App-info-1"><span className="#">Kilpailun nimi</span></span>
          <span className="App-info-1">rasti <span className="#">#</span></span>
          <span className="App-info-1"><span className="#">rastin aika</span></span>
          <button className="App-info-2">Filter</button>
        </div>
        <div className="teams-flex">
          <div className="team-container">
            <div className="team-num">
              <h1>num #</h1>
            </div>
            <div className="team-nimet">
              <h2>Tiimi nimi</h2>
              <h4>Koulun nimi</h4>
            </div>
            <div className="team-rasti-aika">
              <h4>rasti aika</h4>
            </div>
            <div className="team-koko-aika">
              <h3>kokonaisaika</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
