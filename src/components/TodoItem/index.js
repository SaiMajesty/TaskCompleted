import './index.css'

const TodoItem = props => {
  const {todoDetails, deleteTodo, addTodo} = props
  const {id, title} = todoDetails
  const onDelete = () => {
    deleteTodo(id)
  }
  const onAdd = () => {
    addTodo(id)
  }
  return (
    <li className="list_item">
      <p className="title">{title}</p>
      <button type="button" className="btn" onClick={onDelete}>
        Delete
      </button>
      <button type="button" className="btn" onClick={onAdd}>
        Completed
      </button>
    </li>
  )
}

export default TodoItem
