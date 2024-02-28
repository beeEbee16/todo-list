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
  const myNewTask = {id, checked: false, editing: false, taskDesc, parentId: 0};
  const listItems = [...tasks, myNewTask];
  setTasks(listItems);
}

const whenSubmit = (e) => {
  e.preventDefault();
  if (!newTaskItem) return;
  if (newTaskItem.trim() === '') {
    alert('Please enter an item');
  } else {
  addTask(newTaskItem);
  setNewTaskItem('');
}}

const handleCheck = (item) => {
  let listItems = tasks.map((task) => task.id === item.id ? {...task, checked: !task.checked} : task);
  listItems = listItems.map((child) => child.parentId === item.id ? {...child, checked: item.checked ? child.checked : true} : child);
  setTasks(listItems);
  checkChildren(item.id);
}

const checkChildren = (id) => {
  const children = tasks.filter((task) => task.parentId === id);
  children.forEach((child) => {
    console.log(child);
  });
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
  if (editTaskItem.trim() === '') {
    alert('Please enter an item');
  } else {
  const listItems = tasks.map((task) => task.id === id ? {...task, taskDesc: editTaskItem, editing: false} : task);
  setTasks(listItems);
}}


const handleCancel = (id) => {
  const myTask = tasks.filter((task) => task.id === id);
  if (myTask[0].taskDesc === '') {
    handleDelete(id);
  } else {
    const listItems = tasks.map((task) => task.id === id ? {...task, editing: false} : task);
    setTasks(listItems);
}}

const handleAdd = (id) => {
  const newId = tasks.length ? tasks[tasks.length - 1].id + 1 : 1;
  const myChildTask = {id: newId, checked: false, editing: true, taskDesc: '', parentId: id};
  const listItems = [...tasks, myChildTask];
  setTasks(listItems);
  setEditTaskItem('');
}

  return (
    <body>
      <main>
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
            tasks={tasks}
            handleCheck={handleCheck}
            handleEdit={handleEdit}
            handleSave={handleSave}
            handleDelete={handleDelete}
            handleCancel={handleCancel}
            editTaskItem={editTaskItem}
            setEditTaskItem={setEditTaskItem}
            handleAdd={handleAdd}
          />
        </div>
      </main>
    </body>
  );
}

export default App;
