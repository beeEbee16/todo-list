import React from 'react';
import './App.css';
import FormInput from './FormInput';
import FormList from './FormList';
import { useState } from 'react';

function App() {

const [newTaskItem, setNewTaskItem] = useState('');
const [tasks, setTasks]=useState([]);

const addTask = (taskDesc) => {

  const id = tasks.length ? tasks[tasks.length - 1].id + 1 : 1;
  const myNewTask = {id, completed: false, taskDesc};
  const taskList = [...tasks, myNewTask];

  setTasks(taskList);
}

const whenSubmit = (e) => {
  e.preventDefault();
  if (!newTaskItem) return;
  addTask(newTaskItem);
  setNewTaskItem('');
}

const handleCheck = (id) => {
  
}

const handleDelete = (id) => {

}


  return (
    <div className="App">
      <header>
        Todo List
      </header>
      <FormInput 
        whenSubmit={whenSubmit}
        newTaskItem={newTaskItem}
        setNewTaskItem={setNewTaskItem}
        />
      <FormList 
        items={tasks}
        handleCheck={handleCheck}
        handleDelete={handleDelete}
      />
    </div>
  );
}

export default App;
