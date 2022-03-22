import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getNextTimeLine } from "../../common/mockData";
import TimelineList from "../component/TimelineList";
import { actions } from "../state";

// useReducer를 사용하여 상태값 변경 함수를 호출할 때마다
// 상태값을 변경하는 코드
export default function TimelineMain() {
  const dispatch = useDispatch();
  const timelines = useSelector((state) => state.timeline.timelines);
  const isLoading = useSelector((state) => state.timeline.isLoading);

  function onAdd() {
    //데이터를 가져와서 추가하는 액션 발생
    const timeline = getNextTimeLine();
    dispatch(actions.addTimeline(timeline));
  }
  function onLike(e) {
    const id = Number(e.target.dataset.id);
    const timeline = timelines.find((item) => item.id === id);
    console.log(timeline);
    dispatch(actions.requestLike(timeline));
  }
  return (
    <div>
      <button onClick={onAdd}>타임라인 추가</button>
      <TimelineList timelines={timelines} onLike={onLike} />
      {isLoading && <p>전송 중...</p>}
    </div>
  );
}
