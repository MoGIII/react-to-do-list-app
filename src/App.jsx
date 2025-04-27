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
    //console.log(task);
    this.setState({
      tasks: [...this.state.tasks, task]
    });
  }

  render(){
    return (
      <div className='App'>
        <AddTaskForm onAddTask={this.onAddTask.bind(this)}/>
        <hr/>
        <ul>
          {this.state.tasks.map((task, index)=>{
            return <li key={index}>{task}</li>
          })}
        </ul>
      </div>
  );
  }
}

export default App
