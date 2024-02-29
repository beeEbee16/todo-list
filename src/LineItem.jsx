import React from 'react'
import { FaTrashAlt } from 'react-icons/fa';
import { FaEdit } from 'react-icons/fa';
import { IoMdAdd } from "react-icons/io";
import EditItem from './EditItem';


const LineItem = ({ item, tasks, handleCheck, handleDelete, handleEdit, handleAdd, handleSave, handleCancel, editTaskItem, setEditTaskItem }) => {

  let children = null
  const filteredTasks = tasks.filter((task) => task.parentId === item.id);
  if (filteredTasks.length) {
    children = (
      <div>
      <ul className='childItems'>
          {filteredTasks.map((childItem) => (
            childItem.editing ? (
              <EditItem 
                item={childItem} 
                handleSave={handleSave} 
                handleCancel={handleCancel} 
                editTaskItem={editTaskItem} 
                setEditTaskItem={setEditTaskItem}
              />
              ) : (
              <LineItem 
                item={childItem} 
                tasks={tasks}
                key={childItem.id} 
                handleCheck={handleCheck} 
                handleDelete={handleDelete} 
                handleEdit={handleEdit} 
                handleAdd={handleAdd} 
                handleSave={handleSave} 
                handleCancel={handleCancel} 
              />)
            ))}
      </ul>
      </div>
    );   
  }

  return (
    <div>
    <li className='item' key={item.id}>
        <input 
            type="checkbox"
            onChange={() => handleCheck(item)}
            checked={item.checked} 
        />
        <label 
            style={(item.checked) ? {textDecoration: 'line-through'} : null}
            onClick={() => handleCheck(item)}
        >{item.taskDesc}</label>
        <FaEdit 
            role='button'
            className='btnEdit'
            onClick={() => handleEdit(item.id)}
          />
        {item.parentId === 0 ? (
          <IoMdAdd
            role='button'
            className='btnAdd'
            onClick={() => handleAdd(item.id)}
        />) : null}
          <FaTrashAlt
            role='button'
            className='btnDelete'
            onClick={() => handleDelete(item.id)}
          />
    </li>
        {children}
    </div>
  )
}

export default LineItem
