import "./App.css";
import Body from "./components/Body";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div className="wrapper">
      <div className="left">
        <Navbar />
        <Body />
      </div>
      <div className="right">
        <Sidebar />
      </div>
    </div>
  );
}

export default App;
