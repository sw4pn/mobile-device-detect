import { isMobile } from "react-device-detect";
import "./App.css";

function App() {
  return (
    <div className="hero">
      {isMobile ? "This is a mobile device" : "This is not a mobile device"}
    </div>
  );
}

export default App;
