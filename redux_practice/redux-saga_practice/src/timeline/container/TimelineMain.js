import React, { useEffect, useReducer } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getNextTimeLine } from "../../common/mockData";
import TimelineList from "../component/TimelineList";
import { addTimeline } from "../state";

// useReducer를 사용하여 상태값 변경 함수를 호출할 때마다
// 상태값을 변경하는 코드
export default function TimelineMain() {
  const timelines = useSelector((state) => state.timeline.timelines);
  const dispatch = useDispatch();

  function onAdd() {
    //데이터를 가져와서 추가하는 액션 발생
    const timeline = getNextTimeLine();
    dispatch(addTimeline(timeline));
  }

  return (
    <div>
      <button onClick={onAdd}>타임라인 추가</button>
      <TimelineList timelines={timelines} />
    </div>
  );
}
