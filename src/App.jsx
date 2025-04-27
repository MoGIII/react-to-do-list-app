import { Component } from 'react';
import './App.css'
import AddTaskForm from './AddTaskForm/AddTaskForm';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      tasks: []
    };
  }

  onAddTask(task){
    this.setState({
      tasks: [...this.state.tasks, task]
    });
  }

  onDeleteTask(index){
    this.setState({
      tasks: this.state.tasks.filter((_,i)=> i !== index)
    });
  }

  render(){
    return (
      <div className='App'>
        <AddTaskForm onAddTask={this.onAddTask.bind(this)}/>
        <hr/>
        <ul>
          {this.state.tasks.map((task, index)=>{
            return (
            <li key={index}>
              {task}
              <button onClick={this.onDeleteTask.bind(this, index)}>x</button>
            </li>);
          })}
        </ul>
      </div>
  );
  }
}

export default App
