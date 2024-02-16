import React from 'react'

const LineItem = ({ item, handleCheck, handleDelete}) => {
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
        <button className='btnDelete' style={{cursor: 'pointer'}}>X</button>
        { /* https://youtu.be/XyIXMQ9SZmI?list=PL0Zuz27SZ-6PrE9srvEn8nbhOOyxnWXfp&t=1266
            add delete button */ }
    </li>
  )
}

export default LineItem
