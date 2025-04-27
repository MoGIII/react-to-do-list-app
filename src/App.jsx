import { Component } from 'react';
import './App.css'
import MyForm from './MyForm/MyForm';
import MyMap from './MyMap/MyMap'
import AddTaskForm from './AddTaskForm/AddTaskForm';

class App extends Component() {

  render(){
    return (
      <div className='App'>
        <AddTaskForm/>
      </div>
  );
  }
}

export default App
