import React from 'react';
import './App.css';
import FormInput from './FormInput';
import FormList from './FormList';
import { useState } from 'react';
import SearchInput from './SearchInput';

function App() {

const [newTaskItem, setNewTaskItem] = useState('');
const [tasks, setTasks] = useState(JSON.parse(localStorage.getItem('TodoList')));
const [search, setSearch] = useState('');

const addTask = (taskDesc) => {

  const id = tasks.length ? tasks[tasks.length - 1].id + 1 : 1;
  const myNewTask = {id, completed: false, taskDesc};
  const listItems = [...tasks, myNewTask];
  setTasks(listItems);
  localStorage.setItem('TodoList', JSON.stringify(listItems));
}

const whenSubmit = (e) => {
  e.preventDefault();
  if (!newTaskItem) return;
  addTask(newTaskItem);
  setNewTaskItem('');
}

const handleCheck = (id) => {
  const listItems = tasks.map((task) => task.id === id ? {...task, checked: !task.checked} : task);
  setTasks(listItems);
  localStorage.setItem('TodoList', JSON.stringify(listItems));
}

const handleDelete = (id) => {
  const listItems = tasks.filter((task) => task.id !== id);
  setTasks(listItems);
  localStorage.setItem('TodoList', JSON.stringify(listItems));
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
      <SearchInput
        search={search}
        setSearch={setSearch}
      />
      <FormList 
        items={tasks.filter(item => ((item.taskDesc).toLowerCase()).includes(search.toLowerCase()))}
        handleCheck={handleCheck}
        handleDelete={handleDelete}
      />
    </div>
  );
}

export default App;
