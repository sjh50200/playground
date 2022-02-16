import {createStore, combineReducers} from 'redux';
import todoReducer from '../common/state/state';

const reducer = combineReducers({
    todo: todoReducer,
});

const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__?.());
export default store;