import React from 'react'

function todolist({ todos }) {
    return (
        <ul>
            {todos.map(todo => {
                <li key={todo.id}>{todo.content}</li>
            })}
        </ul>
    )
}

export default todolist
