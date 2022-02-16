import React, { useEffect, useReducer } from 'react';
import { getNextTimeLine } from '../../common/mockData';
import store from '../../common/store';
import TimelineList from '../component/TimelineList';
import { addTimeline } from '../state';

// useReducer를 사용하여 상태값 변경 함수를 호출할 때마다
// 상태값을 변경하는 코드
export default function TimelineMain() {
    //함수를 호출할 때마다 강제 렌더링을 시키기 위해 만들어 놓은 구조임.
    const [, forceUpdate] = useReducer(v => v + 1, 0);
    useEffect(() => {
        //subscribe를 사용하여 액션 처리가 끝나면 항상 컴포넌트가 렌더링 되도록 처리를 함.
        const unsubscribe = store.subscribe(() => forceUpdate());
        return () => unsubscribe();
    }, []);
    function onAdd() {
        //데이터를 가져와서 추가하는 액션 발생
        const timeline = getNextTimeLine();
        store.dispatch(addTimeline(timeline));
    }
    console.log('TimelineMain render');
    const timelines = store.getState().timeline.timelines;
    return (
        <div>
            <button onClick={onAdd}>타임라인 추가</button>
            <TimelineList timelines={timelines} />
        </div>
    );
}
