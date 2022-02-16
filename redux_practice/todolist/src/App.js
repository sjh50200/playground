import { addList } from './common/state/state';
import store from './common/store';
import TodolistMain from './container/TodolistMain';

store.dispatch(addList({id: 1, content: 'redux 이해하기'}));
store.dispatch(addList({id: 2, content: 'redux 이해하기'}));
store.dispatch(addList({id: 3, content: 'redux 이해하기'}));

export default function App() {
  return (
    <div>
      <TodolistMain />
    </div>
  );
}
