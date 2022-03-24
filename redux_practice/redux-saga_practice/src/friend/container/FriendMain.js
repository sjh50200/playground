import React from "react";
import { getNextFriend } from "../../common/mockData";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import FriendList from "../component/FriendList";
import { actions } from "../state";
import NumberSelect from "../component/NumberSelect";
import { MAX_AGE_LIMIT, MAX_SHOW_LIMIT } from "../common";
import {
  getAgeLimit,
  getFriendsWithAgeLimit,
  getFriendsWithAgeShowLimit,
  getShowLimit,
} from "../state/selector";

export default function FriendMain() {
  // useSelector 함수를 두 가지 방식으로 구현함.
  // 1. 내가 사용하는 최적화 진행 된 방식
  const ageLimit = useSelector(getAgeLimit);
  const showLimit = useSelector(getShowLimit);
  // 2. shallowEqual을 통한 배열 관리 방식
  // shallowEqual은 얕은 복사를 진행하게 한다.
  const [friendsWithAgeLimit, friendsWithAgeShowLimit] = useSelector(
    (state) => [
      getFriendsWithAgeLimit(state),
      getFriendsWithAgeShowLimit(state),
    ],
    shallowEqual
  );
  const dispatch = useDispatch();

  function onAdd() {
    const friend = getNextFriend();
    dispatch(actions.addFriend(friend));
  }

  return (
    <div>
      <button onClick={onAdd}>친구 추가</button>
      <NumberSelect
        onChange={(v) => dispatch(actions.setValue("ageLimit", v))}
        value={ageLimit}
        options={AGE_LIMIT_OPTIONS}
        postfix="세 이하만 보기"
      />
      <FriendList friends={friendsWithAgeLimit} />
      <NumberSelect
        onChange={(v) => dispatch(actions.setValue("showLimit", v))}
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
