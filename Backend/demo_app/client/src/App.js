import React, { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [backendData, setBackendData] = useState([{}]);

  const callApi = () => {
    fetch("/api")
      .then((response) => response.json())
      .then((data) => {
        setBackendData(data);
      });
  };
  //! fetch data from api at the start of the page loading
  // useEffect(() => {
  //   fetch("/api")
  //     .then((response) => response.json())
  //     .then((data) => {
  //       setBackendData(data);
  //     });
  // }, []);

  return (
    <div>
      {typeof backendData.users === "undefined" ? (
        <p>No data</p>
      ) : (
        backendData.users.map((user, i) => {
          return <div key={i}>{user}</div>;
        })
      )}

      <button onClick={callApi}>fetch Api</button>

      <form onSubmit={""}>
        <input
          type="text"
          value={""}
          onChange={(e) => setBackendData(e.target.value)}
        />
        <input type="submit" />
      </form>
    </div>
  );
}

export default App;
