import React, { Component } from 'react';
import './App.css';
import Header from './Components/Header';
import Taskbar from './Components/Taskbar';
import TaskList from './Components/TaskList';
import Tasks from './Components/Tasks';
class App extends Component {
  render(){
    return(
      <div>
        <Header/>
        <Taskbar/>
        <TaskList/>
        <Tasks/>
      </div>
    )
  
    
    }
}


export default App;
