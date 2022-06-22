import { useState, React, useEffect, useRef } from "react";
import "./styles.css";

const useClick = (onClick) => {
  if (typeof onclick != "function") {
    return;
  }
  const element = useRef();
  useEffect(() => {
    if (element.current) {
      element.current.addEventListener("click", onClick);
    }
    return () => element.current.removeEventListener("click", onClick);
  }, []);
  return element;
};

const App = () => {
  const sayHello = () => console.log("say hello");
  const title = useClick(sayHello);
  return (
    <div className="App">
      <h1 ref={title}>Hi</h1>
    </div>
  );
};

export default App;
