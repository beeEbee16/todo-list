import React from 'react'

const RadioFilter = ({ optionItem, setOptionItem }) => {
  return (
    <form>
       <label className='radio'>
            <input
                type='radio'
                value='allTasks'
                checked={optionItem === 'allTasks'}
                onChange={(e) => setOptionItem(e.target.value)}
            />
          All Tasks
        </label>
        <label className='radio'>
            <input
                type='radio'
                value='incompleteTasks'
                checked={optionItem === 'incompleteTasks'}
                onChange={(e) => setOptionItem(e.target.value)}
            />
          Incomplete Tasks
        </label>
        <label className='radio'>
            <input
                type='radio'
                value='completeTasks'
                checked={optionItem === 'completeTasks'}
                onChange={(e) => setOptionItem(e.target.value)}
            />
          Complete Tasks
        </label>
    </form>
  )
}

export default RadioFilter
