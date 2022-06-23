import { useEffect, React, useRef } from "react";
import "./styles.css";

const useConfirm = (message = "", onconfirm, onCancel) => {
  if (onconfirml && typeof onconfirm !== "function") {
    return;
  }
  if (onCancel && typeof onCancel !== "function") {
    return;
  }
  const confirmAction = () => {
    if (confirm(message)) {
      onconfirm();
    } else {
      onCancel();
    }
  };
  return confirmAction;
};

const App = () => {
  const deleteWorld = () => console.log("Deleting the world");
  const abort = () => console.log("Aborted");
  const confirmDelete = useConfirm("r u sure?", deleteWorld, abort);
  return (
    <div className="App">
      <button onClick={confirmDelete}>Delete the world</button>
    </div>
  );
};

export default App;
