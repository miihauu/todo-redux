import React from 'react';
import { connect } from 'react-redux';
import { delTodo } from '../actions'


const Todos = ({todos, delTodo}) => {


    const todoList = () => {
            return todos.map(todo => (
                <div className="collectionItem" key={todo.id}>
                    <span onClick={() => delTodo(todo.id)}>
                        {todo.text}
                    </span>
                </div>
            ));
        }   
      

    return (
        <div className="todos collection">
            {todoList()}
            {console.log(todos)}
        </div>
    )
}

const mapDispatchToProps = dispatch => {
    return {
        delTodo: id => dispatch(delTodo(id))
    }
}

const mapStateToProps = state => {
    return {
        todos: state.todos
        
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Todos);