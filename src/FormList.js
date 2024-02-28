import LineItem from './LineItem';
import EditItem from './EditItem';


const FormList = ({ items, tasks, handleCheck, handleDelete, handleEdit, handleSave, handleCancel, editTaskitem, setEditTaskItem, handleAdd }) => { 
  const parentTasks = items.filter((item) => item.parentId === 0)
  return (
      <ul>
        {/* tasks.filter((task) => task.id !== id); */}
        {parentTasks.map((item) => (  
        //{items.map((item) => (
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
                tasks={tasks}
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
