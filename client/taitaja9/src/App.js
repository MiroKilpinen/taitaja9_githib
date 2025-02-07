import Navbar from "./components/Navbar";
import "./styles/App.css";
import Footer from "./components/footr";

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
      <div className="App-body"></div>
      <Footer />
    </div>
  );
}

export default App;
