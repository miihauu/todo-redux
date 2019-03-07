import React from 'react';
import Todos from './Todos';
import AddTodo from './AddTodo';


const App = () => {

    
    
        return ( 
            <div className="todo-app container">
                <h1 className="center blue-text">Todo's</h1>
                <AddTodo />
                <Todos />
            </div>
         );
    
};


 
export default App;