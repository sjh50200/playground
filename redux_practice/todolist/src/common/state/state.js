import createReducer from "../createReducer";

const ADD = 'add';
const REMOVE = 'remove';
const EDIT = 'edit';

//type은 문자열
export const addList = (todo) => { return { type: ADD, todo } };
export const removeList = (todo) => { return { type: REMOVE, todo } };
export const editList = (todo) => { return { type: EDIT, todo } };

const INITIAL_STATE = { todos: [] };

const reducer = createReducer(INITIAL_STATE, {
    [ADD]: (state, action) => state.todos.push(action.todo),
    [REMOVE]: (state, action) => 
    (state.todos = state.todos.filter(
        todo => todo.id !== action.todo.id,
    )),
    [EDIT]: (state, action) => {
        const index = state.todos.findIndex(
            todo => todo.id === action.todo.id,
        );
        if (index >= 0) {
            state.todos[index] = action.todo;
        }
    }
});
export default reducer;
