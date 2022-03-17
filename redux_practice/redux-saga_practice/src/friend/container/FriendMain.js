import React, { useEffect, useReducer } from "react";
import { getNextFriend } from "../../common/mockData";
import { useDispatch, useSelector } from "react-redux";
import store from "../../common/store";
import FriendList from "../component/FriendList";
import { addFriend } from "../state";

export default function FriendMain() {
  const friends = useSelector((state) => state.friend.friends);
  const dispatch = useDispatch();

  function onAdd() {
    const friend = getNextFriend();
    dispatch(addFriend(friend));
  }

  return (
    <div>
      <button onClick={onAdd}>친구 추가</button>
      <FriendList friends={friends} />
    </div>
  );
}
