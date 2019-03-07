let todoID = 0;

export const addTodo = text => {
    return {
        type: 'ADD_TODO',
        id: todoID++,
        text
    }
}

export const delTodo = id => {
    return {
        type: 'DEL_TODO',
        id
    }
}