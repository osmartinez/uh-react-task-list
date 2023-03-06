import { useState } from 'react';
import './App.css';
import InputButton from './components/InputButton/InputButton'
import TaskList from './components/TaskList/TaskList'
function App() {

  const [list, setList] = useState([])

  function addTask(title){
    setList([...list,title])
  }

  function deleteTask(title){
     setList(list.filter(t=> t !== title))
  }


  return (
    <div className="App">
      <InputButton handleAddTask={addTask}></InputButton>
      <TaskList handleDeleteTask1={deleteTask} tasklist={list}></TaskList>
    </div>
  );
}

export default App;
