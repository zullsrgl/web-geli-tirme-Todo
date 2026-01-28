import React, { useState } from 'react';

export default function TodoInput({ addTodo }) {
  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim() === '') return;
    addTodo(text); 
    setText('');
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-md flex gap-2">
      <input
        type="text"
        placeholder="Yeni görev ekle..."
        className="flex-1 bg-zinc-800 border border-zinc-700 text-white px-4 py-3 rounded-2xl outline-none focus:ring-2 focus:ring-emerald-500/50 transition-all"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button 
        type="submit" 
        className="bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-3 rounded-2xl font-bold transition-all active:scale-95"
      >
        Ekle
      </button>
    </form>
  );
}
