import Navbar from "./components/Navbar";
import "./styles/App.css";
import Footer from "./components/footr";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="App-body">
        <div className="App-info">
          <span className="App-info-1"><span className="#">Kilpailun nimi</span></span>
          <span className="App-info-1">rasti <span className="#">#</span></span>
          <span className="App-info-1"><span className="#">rastin aika</span></span>
          <button className="App-info-2">Filter</button>
        </div>
        <div className="team-flex">
          <div className="team-container">
              <div className="team-num">
                <p>num #</p>
              </div>
              <div className="team-nimet">
                <p>Tiimi nimi</p>
                <p>Koulun nimi</p>
              </div>
              <div className="team-rasti-aika">
                <p>rasti aika</p>
              </div>
              <div className="team-koko-aika">
                <p>kokonaisaika</p>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
