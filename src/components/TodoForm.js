import React from 'react'

export default class TodoForm extends React.Component {
    constructor() {
        super();
        this.state ={
            todoText: '',
        }

        handleChange =(e) =>{
            const {name, value} = e.target;
            this.setState({
                [name]: value,
            })
        }

        handleSubmit = e =>{
            e.preventDefault();
            this.props.addItem(this.state.todoText);
            this.setState({
                todoText: '',
            })
        }

    }
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label htmlFor="todo-input">Add Todo:</label>
                <input 
                id="todo-input" 
                name="todoText"
                value={this.state.todoText} 
                onChange={handleChange}/>
                <button>Add Todo</button>
            </form>
        )
    }
}

