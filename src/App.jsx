import React, { useState } from 'react';
import TodoInput from './components/TodoInput.jsx';
import TodoItem from './components/TodoItem';

export default function App() {
  const [todos, setTodos] = useState([]);

 const addTodo = (text) => {
  if (text.trim() === '') return;
  setTodos([...todos, { id: Date.now(), text: text, completed: false }]);
};

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const toggleComplete = (id) => {
    setTodos(
      todos.map(todo =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const updateTodo = (id, newText) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, text: newText } : todo
      )
    );
  };

  return (
    <div className="min-h-screen bg-zinc-900 p-6 flex flex-col items-center text-white">
      <h1 className="text-4xl font-bold mb-8">Todo App</h1>
      
      {/* TodoInput içindeki addTodo zaten çalışıyor */}
      <TodoInput addTodo={addTodo} />

      <div className="w-full max-w-md mt-6">
        {todos.map(todo => (
          <TodoItem
            key={todo.id}
            todo={todo}
            deleteTodo={deleteTodo}
            updateTodo={updateTodo} // BURAYI EKLEDİĞİNDEN EMİN OL
          />
        ))}
      </div>
    </div>
  );
}

