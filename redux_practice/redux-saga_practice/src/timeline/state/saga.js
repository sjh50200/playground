import { all, call, take, put, takeLeading } from "redux-saga/effects";
import { actions, types } from "./index";
import { callApiLike } from "../../common/api";

// 함수는 액션 객체가 매개변수로 넘어온다.
// put, call, all은 부수효과라고 부름
export function* fetchData(action) {
  //put은 redux action을 발생 시킴
  yield put(actions.setLoading(true));
  //positive 방식(api call이 성공했다고 가정)으로 like 카운트를 하나 증가시킴
  yield put(actions.addLike(action.timeline.id, 1));
  //call effect는 뒤의 함수를 실행시켜줌
  yield call(callApiLike);
  yield put(actions.setLoading(false));
}

export default function* () {
  //takeLeading 첫 번째 매개변수의 action이 넘어왔을 때, 두 번째 매개변수 실행
  yield all(takeLeading(types.REQUEST_LIKE, fetchData));
}

const a = take(types.REQUES_LIKE);
const b = put(actions.setLoading(false));
const c = call(callApiLike);
console.log(a, b, c);

const logResult = {
  a: {
    TAKE: {
      pattern: "timeline/REQUEST_LIKE",
    },
  },
  b: {
    PUT: {
      channel: null,
      action: {
        type: "timeline/SET_LOADING",
        isLoading: false,
      },
    },
  },
  c: {
    CALL: {
      context: null,
      fn: callApiLike,
      args: [],
    },
  },
};
