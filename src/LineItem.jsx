import React from 'react'
import { FaTrashAlt } from 'react-icons/fa';
import { FaEdit } from 'react-icons/fa';
import { IoMdAdd } from "react-icons/io";
import EditItem from './EditItem';


const LineItem = ({ item, handleCheck, handleDelete, handleEdit, handleAdd, handleSave, handleCancel, editTaskItem, setEditTaskItem }) => {

  let children = null;
  if (item.children.length) {
    children = (
      <div>
      <ul>
          {item.children.map((childItem) => (
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
            onChange={() => handleCheck(item.id)}
            checked={item.checked} 
        />
        <label 
            style={(item.checked) ? {textDecoration: 'line-through'} : null}
            onClick={() => handleCheck(item.id)}
        >{item.taskDesc}</label>
        <FaEdit 
            role='button'
            className='btnEdit'
            onClick={() => handleEdit(item.id)}
          />
        <IoMdAdd
            role='button'
            className='btnAdd'
            onClick={() => handleAdd(item.id)}
        />
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
