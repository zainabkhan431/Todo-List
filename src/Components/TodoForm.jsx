import { useState } from "react";
import TodoItem from "./TodoItem";

export default function TodoForm() {
  const [input, setInput] = useState("");
  const [tasks, setTasks] = useState([]);

  function handleClick() {
    if (!input.trim()) return;
    setTasks([...tasks, { text: input, completed: false }]);
    setInput("");
  }

  function handleDelete(index) {
    setTasks(tasks.filter((task, i) => i !== index));
  }
  function handleToggle(index) {
    setTasks(
      tasks.map((task, i) =>
        i === index ? { ...task, completed: !task.completed } : task
      )
    );
  }
  return (
    <>
      <div className="display: flex justify-center align-middle gap-1.5">
        <input
          type="text"
          value={input}
          className=" border-black border-2"
          onChange={(e) => setInput(e.target.value)}
        />
        <button
          className="bg-purple-300 border-black border-2 p-1 rounded-md"
          onClick={handleClick}
        >
          Add
        </button>
      </div>
      <TodoItem
        tasks={tasks}
        handleDelete={handleDelete}
        handleToggle={handleToggle}
      />
    </>
  );
}
