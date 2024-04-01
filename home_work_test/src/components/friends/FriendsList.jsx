import React from "react";
import Friends from "./Friends";

function FriendsList({ items }) {
  return (
    <ul>
      {items.map((item) => (
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
