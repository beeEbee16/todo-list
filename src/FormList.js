import LineItem from './LineItem';
import EditItem from './EditItem';


const FormList = ({ items, handleCheck, handleDelete, handleEdit, handleSave, handleCancel, editTaskitem, setEditTaskItem }) => { 
  return (
      <ul>
        {items.map((item) => (
            item.editing ? (
              <EditItem
                key={item.id}
                item={item}
                handleSave={handleSave}
                handleCancel={handleCancel}
                editTaskitem={editTaskitem}
                setEditTaskItem={setEditTaskItem}
              />
              ) : (
              <LineItem
                key={item.id}
                item={item}
                handleCheck={handleCheck}
                handleEdit={handleEdit}
                handleDelete={handleDelete}
              />)
        ))}
      </ul>
  )
}

export default FormList
