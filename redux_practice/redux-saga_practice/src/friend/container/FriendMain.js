import React, { useEffect, useReducer } from "react";
import { getNextFriend } from "../../common/mockData";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import FriendList from "../component/FriendList";
import { addFriend, setAgeLimit, setShowLimit } from "../state";
import NumberSelect from "../component/NumberSelect";
import { MAX_AGE_LIMIT, MAX_SHOW_LIMIT } from "../common";

export default function FriendMain() {
  const friends = useSelector((state) => state.friend.friends);
  const ageLimit = useSelector((state) => state.friend.ageLimit);
  const showLimit = useSelector((state) => state.friend.showLimit);

  //shallowEqual은 얕은 복사를 진행해버리게 한다.
  const [friendsWithAgeLimit, friendsWithAgeShowLimit] = useSelector(
    (state) => {
      const friendsWithAgeLimit = state.friend.friends.filter(
        (item) => item.age <= ageLimit
      );
      return [friendsWithAgeLimit, friendsWithAgeLimit.slice(0, showLimit)];
    },
    shallowEqual
  );
  const dispatch = useDispatch();

  function onAdd() {
    const friend = getNextFriend();
    dispatch(addFriend(friend));
  }

  return (
    <div>
      <button onClick={onAdd}>친구 추가</button>
      <NumberSelect
        onChange={(v) => dispatch(setAgeLimit(v))}
        value={ageLimit}
        options={AGE_LIMIT_OPTIONS}
        postfix="세 이하만 보기"
      />
      <NumberSelect
        onChange={(v) => dispatch(setShowLimit(v))}
        value={showLimit}
        options={SHOW_LIMIT_OPTIONS}
        postfix="명 이하만 보기 (연령 제한 적용)"
      />
      <FriendList friends={friendsWithAgeShowLimit} />
    </div>
  );
}

const AGE_LIMIT_OPTIONS = [15, 20, 25, MAX_AGE_LIMIT];
const SHOW_LIMIT_OPTIONS = [2, 4, 6, MAX_SHOW_LIMIT];
