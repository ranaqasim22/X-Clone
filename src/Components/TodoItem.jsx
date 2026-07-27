function TodoItem({ todo, onToggle, onDelete }) {
return (
    <li className="flex items-center gap-2 border rounded px-3 py-2">
      <input
        type="checkbox"
        checked={todo.done}
        onChange={() => onToggle(todo.id)}
      />
      <span className={todo.done ? "flex-1 line-through text-gray-400" : "flex-1"}>
        {todo.text}
      </span>
      <button
        onClick={() => onDelete(todo.id)}
        className="text-red-500 hover:text-red-700">
✕
      </button>
    </li>
  )
}
export default TodoItem