import { useState } from 'react'

function TodoForm({ onAdd }) {
  const [text, setText] = useState('')

  function handleSubmit(e) {
    e.preventDefault()
    if (!text.trim()) return
    onAdd(text)
    setText('')
  }

  return (
    <form onSubmit={handleSubmit} className="flex gap-2">
      <input
        className="flex-1 border rounded px-3 py-2"
        placeholder="Add a new task..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button className="bg-blue-600 text-white px-4 rounded hover:bg-blue-700">
        Add
      </button>
    </form>
  )
}

export default TodoForm