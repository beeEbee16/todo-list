import React, { useEffect } from 'react';
import './App.css';
import FormInput from './FormInput';
import FormList from './FormList';
import { useState } from 'react';
import SearchInput from './SearchInput';
import RadioFilter from './RadioFilter';

function App() {

const [newTaskItem, setNewTaskItem] = useState('');
const [tasks, setTasks] = useState(JSON.parse(localStorage.getItem('TodoList')) || []);
const [search, setSearch] = useState('');
const [editTaskItem, setEditTaskItem] = useState('');
const [optionItem, setOptionItem] = useState('allTasks');

useEffect(() => {
  localStorage.setItem('TodoList', JSON.stringify(tasks));
}, [tasks])

const addTask = (taskDesc) => {

  const id = tasks.length ? tasks[tasks.length - 1].id + 1 : 1;
  const myNewTask = {id, completed: false, checked: false, editing: false, taskDesc};
  const listItems = [...tasks, myNewTask];
  setTasks(listItems);
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
}

const handleDelete = (id) => {
  const listItems = tasks.filter((task) => task.id !== id);
  setTasks(listItems);
}

const handleEdit = (id) => {
  const listItems = tasks.map((task) => task.id === id ? {...task, editing: !task.editing} : task);
  setTasks(listItems);
}

const handleSave = (id) => {
  const listItems = tasks.map((task) => task.id === id ? {...task, taskDesc: editTaskItem, editing: false} : task);
  setTasks(listItems);
}


const handleCancel = (id) => {
  const listItems = tasks.map((task) => task.id === id ? {...task, editing: false} : task);
  setTasks(listItems);
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
      <RadioFilter
        optionItem={optionItem}
        setOptionItem={setOptionItem}
      />
      <FormList 
        items={tasks.filter(item => ((item.taskDesc).toLowerCase()).includes(search.toLowerCase()) && ((optionItem === 'allTasks') || (optionItem === 'completeTasks' && item.checked) || (optionItem === 'incompleteTasks' && !item.checked)))}
        handleCheck={handleCheck}
        handleEdit={handleEdit}
        handleSave={handleSave}
        handleDelete={handleDelete}
        handleCancel={handleCancel}
        editTaskItem={editTaskItem}
        setEditTaskItem={setEditTaskItem}
      />
    </div>
  );
}

export default App;
