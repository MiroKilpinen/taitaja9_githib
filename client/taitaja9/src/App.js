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
          <span className="App-info-1">Kilpailun nimi</span>
          <span className="App-info-1">rasti #</span>
          <span className="App-info-1">kilpailun aika</span>
          <button className="App-info-2">Filter</button>
        </div>
      </div>
    </div>
  );
}

export default App;
