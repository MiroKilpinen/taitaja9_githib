import Navbar from "./components/Navbar";
import "./styles/App.css";
import Footer from "./components/footr";
import TeamContainer from "./components/TeamContainer";

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
        <div className="teams-flex">
          <TeamContainer num="numero" Tnimi="Tiimi nimi" Knimi="Koulu nimi" rastiAika="rastin aika" kokoAika="kokonaisaika" />
        </div>
      </div>
    </div>
  );
}

export default App;
