import { React, useEffect, useRef, useState } from "react";
import "./styles.css";

const useFullScreen = (callback) => {
  const element = useRef();
  const runCb = (isFull) => {
    if (callback && typeof callback === "function") {
      callback(isFull);
    }
  };

  const tiggerFull = () => {
    if (element.current) {
      if (element.current.requestFullscreen) {
        element.current.requestFullscreen();
      }
      runCb(true);
    }
  };
  const exitFull = () => {
    document.exitFullscreen();
    if (document.exitFullscreen) {
      document.exitFullscreen();
    }
    runCb(false);
  };
  return { element, tiggerFull, exitFull };
};

const App = () => {
  const [check, setCheck] = useState(false);
  const onFullS = (isFull) => {
    console.log(isFull ? "we r full" : "we r small");
    setCheck(isFull);
  };
  const { element, tiggerFull, exitFull } = useFullScreen(onFullS);
  return (
    <div className="App" style={{ height: "1000vh" }}>
      <div ref={element}>
        <img
          ref={element}
          src="https://media.gq-magazine.co.uk/photos/62ac38f82da9f5f89888eba9/16:9/w_1280,c_limit/jon-snow-series-1200.jpeg"
          alt="grape"
          width="250"
        />
        <button onClick={exitFull}>
          {check ? "Exit Fullscreen" : undefined}{" "}
        </button>
      </div>
      <button onClick={tiggerFull}>Make Fullscreen</button>
    </div>
  );
};

export default App;
