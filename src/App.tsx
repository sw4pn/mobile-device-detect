import {
  isMobile,
  isTablet,
  deviceDetect,
  deviceType,
} from "react-device-detect";
import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [info, setInfo] = useState({});

  useEffect(() => {
    if (window) {
      setInfo(deviceDetect);
    }
  }, []);
  console.log("device details: ", info);

  return (
    <div className="hero">
      {isMobile ? (
        <>
          This is a <b>mobile</b> device
        </>
      ) : (
        <>
          This is a <b> NOT</b> mobile device
        </>
      )}
      <br />
      <hr color="#efefef" />
      <br />
      {isTablet ? (
        <>
          This is a <b>tablet</b> device
        </>
      ) : (
        <>
          This is a <b>NOT</b> tablet device
        </>
      )}
      <br />
      <hr color="#efefef" />
      <br />
      device Type:{" "}
      <span style={{ color: "green" }}> {deviceType?.toUpperCase()}</span>
      <br />
      <hr color="#efefef" />
      <br />
      <div className="info">
        <pre>{JSON.stringify(info, null, 2)}</pre>
      </div>
    </div>
  );
}

export default App;
