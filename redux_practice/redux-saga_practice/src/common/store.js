import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import timelineReducer from "../timeline/state";
import friendReducer from "../friend/state";
import timelineSaga from "../timeline/state/saga";
import createSagaMiddleware from "redux-saga";
import { all } from "redux-saga/effects";

const reducer = combineReducers({
  timeline: timelineReducer,
  friend: friendReducer,
});
//미들웨어 코드 브라우저 extension에 redux탭에 변경 값 로그를 찍어줌.
//optional chaining 문법임 조사하자!
// const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__?.());

//공식 문서에 따른 redux 사가 선언 방법
const sagaMiddleware = createSagaMiddleware();
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducer,
  composeEnhancers(applyMiddleware(sagaMiddleware))
);

function* rootSaga() {
  // saga 추가 될 때, 배열에 추가하면 됨!
  yield all([timelineSaga()]);
}
sagaMiddleware.run(rootSaga);

export default store;
