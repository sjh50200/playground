import React, { useState } from 'react';
import { addList } from '../common/state/state';
import store from '../common/store';
import Todolist from '../component/Todolist';

export default function TodolistMain() {
    const [addText, setAddText] = useState(false);
    const [todos, setTodos] = useState([]);
    const [todo, setTodo] = useState("");
    const onChangeState = () => {
        console.log(store.getState());
        // setTodos(store.getState());
    }
    store.subscribe(onChangeState);

    const inputHandler = (event) => {
        event.preventDefault();
        setTodo(event.target.value);
        console.log(event.target.value);
    }

    return (
        <div>
            <button onClick={() => {setAddText(!addText); console.log(addText);}}>to do 추가</button>
            <br />
            {addText && <input type="text" onChange={inputHandler}/>}
            {addText && <button onClick={() => store.dispatch(addList(todo))}>추가하기</button>}
            <Todolist todos={todos}/>
        </div>
    );
}
