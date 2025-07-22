import { useState } from "react";

export default function ToDoList() {
  const [tasks, setTasks] = useState(["Learn React", "Create Project"]);
  const [newTasks, setNewTasks] = useState("");

  const addTask = () => {
    if (newTasks.trim() !== "") {
      setTasks([...tasks, newTasks]);
      setNewTasks("");
    }
  };

  const removeTasks = (indexToRemove) => {
    setTasks(tasks.filter((_, index) => index !== indexToRemove));
  };
  return (
    <div>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            {task} <button onClick={() => removeTasks(index)}>REMOVE</button>
          </li>
        ))}
      </ul>
      <input
        type="text"
        placeholder="WRITE A TASK"
        value={newTasks}
        onChange={(event) => setNewTasks(event.target.value)}
      />
      <button onClick={addTask}>ADD TASK</button>
    </div>
  );
}
