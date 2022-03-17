import {createStore, combineReducers} from 'redux';
import timelineReducer from '../timeline/state';
import friendReducer from '../friend/state';

const reducer = combineReducers({
    timeline: timelineReducer,
    friend: friendReducer,
});
//미들웨어 코드 브라우저 extension에 redux탭에 변경 값 로그를 찍어줌.
//optional chaining 문법임 조사하자! 
const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__?.());
export default store;