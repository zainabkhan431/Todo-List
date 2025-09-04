import { useState } from "react";
import { MdDelete } from "react-icons/md";

import Button from "./Components/Button";

function App() {
  const [input, setInput] = useState("");
  const [tasks, setTasks] = useState([]);

  function handleClick() {
    if (!input.trim()) return;
    setTasks([{ text: input }, ...tasks]);
    setInput("");
  }

  function handleDelete(index) {
    setTasks(tasks.filter((task, i) => i !== index));
    console.log("deleted");
  }
  function handleDeleteAll() {
    setTasks([]);
  }

  return (
    <div className="bg-white flex justify-center items-center h-screen">
      <div className="  w-full max-w-xl p-6 flex flex-col">
        <h1 className="text-center font-extrabold text-3xl text-purple-900 mb-4">
          My Todo List
        </h1>

        <div className="flex justify-between items-center gap-2 mb-4">
          <input
            type="text"
            value={input}
            className="flex-1 border-2 border-purple-400 rounded-md px-3 py-2 focus:outline-none"
            placeholder="Enter a task..."
            onChange={(e) => setInput(e.target.value)}
          />

          <Button
            onClick={handleClick}
            text="Add"
            className="bg-purple-600 hover:bg-purple-700 text-white font-semibold px-5 py-2 rounded-md shadow-md"
          />
        </div>

        <ul className="bg-purple-100 rounded-lg divide-y divide-purple-300">
          {tasks.map((task, index) => (
            <li
              key={index}
              className="flex items-center justify-between px-3 py-2 hover:bg-purple-200 "
            >
              {task.text}

              <MdDelete
                onClick={() => handleDelete(index)}
                className="text-red-600 hover:text-red-800 p-1 rounded-full hover:bg-red-100 cursor-pointer"
                size={24}
              />
            </li>
          ))}
        </ul>

        {tasks.length > 0 && (
          <Button
            onClick={handleDeleteAll}
            text="Clear All"
            className="mt-4 bg-red-500 hover:bg-red-600 text-white font-semibold px-4 py-2 rounded-lg shadow-md self-end"
          />
        )}
      </div>
    </div>
  );
}

export default App;
