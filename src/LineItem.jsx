import React from 'react'
import { FaTrashAlt } from 'react-icons/fa';
import { FaEdit } from 'react-icons/fa';

const LineItem = ({ item, handleCheck, handleDelete, handleEdit}) => {
  return (
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
            role='btnEdit'
            className='btn'
            onClick={() => handleEdit(item.id)}
          />
          <FaTrashAlt
            role='button'
            className='btnDelete'
            onClick={() => handleDelete(item.id)}
          />     
    </li>
  )
}

export default LineItem
