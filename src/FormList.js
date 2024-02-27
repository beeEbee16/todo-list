import LineItem from './LineItem';
import EditItem from './EditItem';


const FormList = ({ items, handleCheck, handleDelete, handleEdit, handleSave, handleCancel, editTaskitem, setEditTaskItem, handleAdd }) => { 
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
                handleAdd={handleAdd}
                handleSave={handleSave}
                handleCancel={handleCancel}
                editTaskitem={editTaskitem}
                setEditTaskItem={setEditTaskItem}
              />)
        ))}
      </ul>
  )
}

export default FormList
