import { useEffect, React, useRef } from "react";
import "./styles.css";

const useHover = (onHover) => {
  const element = useRef();
  useEffect(() => {
    if (element.current) {
      element.current.addEventListener("mounseEnter", onHover);
    }
    return () => {
      if (element.current) {
        element.current.removeEventListener("mounseEnter", onHover);
      }
    };
  }, []);
  if (typeof onHover !== "function") {
    return;
  }
  return element;
};
const App = () => {
  const sayHello = () => console.log("say hello");
  const title = useHover(sayHello);
  return (
    <div className="App">
      <h1 ref={title}>Hi</h1>
    </div>
  );
};

export default App;
