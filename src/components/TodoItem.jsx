import { useState, useEffect } from "react";

export default function TodoItem({ todo, deleteTodo, updateTodo }) {
  const [isEditing, setIsEditing] = useState(false);
  const [text, setText] = useState(todo.text); 

  useEffect(() => {
    setText(todo.text); 
  }, [todo.text]);

  const handleSave = () => {
    if (text.trim() === "") return;
    updateTodo(todo.id, text);
    setIsEditing(false); 
  };

  return (
    <div className="bg-zinc-800/50 border border-zinc-700/50 backdrop-blur-sm rounded-2xl p-4 flex justify-between items-center shadow-lg mb-4 transition-all hover:scale-[1.02]">
      
      {isEditing ? (
        <input
          autoFocus
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="bg-zinc-700 text-white px-4 py-2 rounded-xl w-full mr-3 outline-none ring-2 ring-emerald-500/50"
        />
      ) : (
        <span className={`text-white text-lg ml-2 ${todo.completed ? 'line-through text-zinc-500' : ''}`}>
          {todo.text}
        </span>
      )}

      <div className="flex gap-2 ml-3">
        {isEditing ? (
          <button
            onClick={handleSave}
            className="bg-emerald-500 hover:bg-emerald-600 text-white px-4 py-2 rounded-xl text-sm font-medium transition-colors"
          >
            Kaydet
          </button>
        ) : (
          <button
            onClick={() => setIsEditing(true)}
            className="bg-zinc-700 hover:bg-zinc-600 text-yellow-400 px-4 py-2 rounded-xl text-sm font-medium transition-colors"
          >
            Düzenle
          </button>
        )}

        <button
          onClick={() => deleteTodo(todo.id)}
          className="bg-zinc-700 hover:bg-red-500/20 hover:text-red-500 text-zinc-400 px-4 py-2 rounded-xl text-sm font-medium transition-colors"
        >
          Sil
        </button>
      </div>
    </div>
  );
}

