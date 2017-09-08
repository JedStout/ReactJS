import React from 'react';

class TodoForm extends React.Component {
    stat = { name: '' , description}

    handleSubmit = (e) => {
        e.preventDefault();
        let name = this.theInput.value;
        this.props.addTodoItem(name);
        this.theForm.reset();
    }

    handleChange = (e) => {
        
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>Add Item</label>
                  <input value = {this.state.name} 
                  
                />
            </form>
        )
    }

}

export default TodoForm;