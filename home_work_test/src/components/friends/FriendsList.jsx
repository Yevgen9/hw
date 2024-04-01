import React from "react";
import Friends from "./Friends";

function FriendsList({ friends }) {
  return (
    <ul>
      {friends.map((item) => (
        <li key={item.id}>
          <Friends
            avatarUrl={item.avatar}
            nameFriend={item.name}
            isOnline={item.isOnline}
          />
        </li>
      ))}
    </ul>
  );
}

export default FriendsList;
