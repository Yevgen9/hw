import React from "react";

import data from "./components/statistics/data.json";
// import friends from "./components/friends/friends.json";

import Profile from "./components/profile/Profile";
import StatisticsList from "./components/statistics/StatisticsList";
// import FriendsList from "./components/friends/FriendsList";

function App() {
  return (
    <div>
      <Profile />
      <StatisticsList stats={data} />
      {/* <FriendsList friends={friends} /> */}
    </div>
  );
}

export default App;
