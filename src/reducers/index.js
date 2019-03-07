import { combineReducers } from 'redux';


const handleToDo = (state = [], action) => {
    switch(action.type) {
        case 'ADD_TODO': 
            return [
                ...state,
                {
                    id: action.id,
                    text: action.text
                }
            ]
        case 'DEL_TODO':
            return state.filter(todo => {
                return todo.id !== action.id;
            })
        default: 
            return state
    }
}






export default combineReducers({
    todos: handleToDo
})