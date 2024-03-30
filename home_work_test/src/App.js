import React from "react";
import Profile from "./components/profile/Profile";
import Statistics from "./components/statistics/Statistics";
import data from "./components/statistics/data.json";

function App() {
  return (
    <div>
      <Profile />
     
      <Statistics stats={data} />
    </div>
  );
}

export default App;
