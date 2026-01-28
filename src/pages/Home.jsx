export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-900 flex justify-center items-start pt-20">
      <div className="w-full max-w-lg bg-zinc-900">
        
        <h1 className="text-4xl font-bold text-white text-center mb-8">
          Todo App
        </h1>

        <TodoForm addTodo={addTodo} />

        <div className="mt-6">
          {todos.length === 0 && (
            <p className="text-zinc-400 text-center">
              Henüz görev yok 🚀
            </p>
          )}

          {todos.map(todo => (
            <TodoItem
              key={todo.id}
              todo={todo}
              deleteTodo={deleteTodo}
              updateTodo={updateTodo}
            />
          ))}
        </div>

      </div>
    </div>
  );
}
