import React, { Component } from 'react';

class AddTaskForm extends Component {

    constructor(props){
        super(props);
        this.state = {
            task: ''
        };
    }

    taskChanged(event){
        this.setState({
            task: event.target.value
        });
    }

    submit(event){
        event.preventDefault();
        this.props.onAddTask(this.state.task);
        this.setState({
            task: ''
        });
    }

    render() {
        return (
            <form onSubmit={this.submit.bind(this)}>
                <input  value={this.state.task} 
                onChange={this.taskChanged.bind(this)}/>
                <button>Add Task</button>
            </form>
        );
    }
}

export default AddTaskForm;
