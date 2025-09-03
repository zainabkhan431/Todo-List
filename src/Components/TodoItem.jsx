import { MdDelete } from "react-icons/md";

export default function TodoItem({ tasks, handleDelete, handleToggle }) {
  return (
    <ul className="border-2 border-black bg-purple-200 mt-4 h-auto w-full max-w-2xl mx-auto rounded-lg ">
      {tasks.map((task, index) => (
        <li
          key={index}
          className="flex items-center justify-between px-3 py-2 hover:bg-purple-300 "
        >
          <span
            onClick={() => handleToggle(index)}
            className={`cursor-pointer  ${
              task.completed
                ? "line-through text-gray-500"
                : "text-black font-medium"
            }`}
          >
            {task.text}
          </span>

          <MdDelete
            onClick={() => handleDelete(index)}
            className="text-red-600 hover:text-red-800 p-1 rounded-full hover:bg-red-100 "
            size={26}
          />
        </li>
      ))}
    </ul>
  );
}
