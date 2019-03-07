import React from 'react';
import { addTodo } from '../actions'
import { connect } from 'react-redux';

class AddTodo extends React.Component {
    state = { content: ''};
    

    updateState = (e) => {
        this.setState({
            content: e.target.value
        })
    }

    onSubmit = e => {
        e.preventDefault();
        this.props.addTodo(this.state.content)
    }

  
     render() {
         return ( 
             <div>
                 <form onSubmit={this.onSubmit}>
                     <label>Add new todo:</label>
                     <input type="text" onChange={this.updateState}/>
                     
                 </form>
             </div>
          );
    }

     
}

const mapDispatchToProps = dispatch => {
    return {
        addTodo: (text) => dispatch(addTodo(text))
    }
}



 
export default connect(null, mapDispatchToProps)(AddTodo);