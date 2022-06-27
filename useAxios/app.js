import { React, useEffect, useRef, useState } from "react";
import "./styles.css";
import useAxios from "./useAxios";

const App = () => {
  const { loading, data, error, refetch } = useAxios({
    url: "https://yts.mx/api/v2/list_movies.json",
  });
  return (
    <div className="App" style={{ height: "1000vh" }}>
      <h1>{data && data.status}</h1>
      <h2>{loading && "loading"}</h2>
      <button onClick={refetch}>Refetch</button>
    </div>
  );
};

export default App;
