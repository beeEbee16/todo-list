import { IoMdAdd } from "react-icons/io";

const FormInput = ({ whenSubmit, newTaskItem, setNewTaskItem}) => {
  return (
    <form className='formInput' onSubmit={whenSubmit}>
        <label htmlFor='addItem'></label>
        <input 
          type='text' 
          id='addItem' 
          placeholder='Add Item' 
          autoFocus
          value={newTaskItem}
          onChange={(e) => {
            setNewTaskItem(e.target.value);
          }}
        />
        <button type='submit' className='todoSubmit'>Add</button>
        {/* <IoMdAdd 
          type='submit'
          className='todoSubmit'
          role='button'
        /> */}
    </form>
  )
}

export default FormInput
