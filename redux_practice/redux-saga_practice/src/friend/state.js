import createReducer from "../common/createReducer";

const ADD = 'friend/ADD';
const REMOVE = 'friend/REMOVE';
const EDIT = 'friend/EDIT';

export const addFriend = friend => ({type:ADD, friend});
export const removeFriend = friend => ({type:REMOVE, friend});
export const editFriend = friend => ({type:EDIT, friend});

const INITIAL_STATE = {friends: []};

//ADD action일 때는 friends 배열에 friend 추가
//REMOVE action일 때는 해당 id 값에 해당하는 friend 제거
//EDIT action일 때는 해당하는 친구 정보를 수정
const reducer = createReducer(INITIAL_STATE, {
    [ADD]: (state, action) => state.friends.push(action.friend),
    [REMOVE]: (state, action) =>
    (state.friends = state.friends.filter(
        friend => friend.id !== action.friend.id,
    )),
    [EDIT]: (state, action) => {
        const index = state.friends.findIndex(
            friend => friend.id === action.friend.id,
        );
        if(index >= 0) {
            state.friends[index] = action.friend;
        }
    },
});
export default reducer;