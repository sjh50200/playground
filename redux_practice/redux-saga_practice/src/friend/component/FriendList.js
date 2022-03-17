import React from "react";

export default function FriendList({ friends }) {
  return (
    <ul>
      {friends.map((friend) => (
        <li key={friend.id}>{friend.name}</li>
      ))}
    </ul>
  );
}
