import React from 'react';
import { MdCancel } from "react-icons/md";
import { FaSave } from "react-icons/fa";


const EditItem = ({item, handleSave, handleCancel, editTaskItem, setEditTaskItem}) => {
  return (
    <li className='item' key={item.id}>
        <input
            type='text' 
            id='editItem' 
            placeholder='Edit Item' 
            autoFocus
            value={editTaskItem}
            onChange={(e) => {
                setEditTaskItem(e.target.value);
            }}
            onKeyDown={(e) => {
                if (e.key === 'Enter') {
                    handleSave(item.id);
                }
            }}
        />
        <FaSave
        role='button'
        className='btn'
        onClick={() => handleSave(item.id)}
        />
        <MdCancel 
        role='button'
        className='btnCancel'
        onClick={() => handleCancel(item.id)}
        />
    </li>
  )
}

export default EditItem
