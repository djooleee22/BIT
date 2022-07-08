import React, { useEffect, useState } from "react";
import "./app.scss";
import HomePage from "./pages/HomePage/HomePage";
import HiringPage from "./pages/HiringPage/HiringPage";
import Header from "./components/Header/Header";

const App = () => {
  const [frontDev, setFrontDev] = useState([]);
  const [onHomePage, setHomePage] = useState(true);

  function hirePage() {
    setHomePage(!onHomePage);
  }

  function fetchData() {
    fetch("https://62b47af3530b26da4cbf9534.mockapi.io/frontend")
      .then((res) => res.json())
      .then((result) => setFrontDev(result));
  }

  useEffect(fetchData, [onHomePage]);

  return (
    <div className="app">
      <Header myF={hirePage} />
      {onHomePage && <HomePage devs={frontDev} />}
      {!onHomePage && <HiringPage myF={hirePage} />}
    </div>
  );
};

export default App;
