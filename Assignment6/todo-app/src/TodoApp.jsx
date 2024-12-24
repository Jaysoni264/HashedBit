import React, { useState } from "react";

function TodoApp() {
  const [task, setTask] = useState(""); // State to store the task input
  const [todoList, setTodoList] = useState([]); // State to store the list of tasks

  // Function to add a new task
  const handleAddTask = () => {
    if (task.trim() === "") {
      alert("Task cannot be empty!"); // Validate empty input
      return;
    }
    const updatedList = [...todoList, task].sort(); // Add and sort tasks
    setTodoList(updatedList); // Update state
    setTask(""); // Clear input field
  };

  // Function to delete a task
  const handleDeleteTask = (index) => {
    const updatedList = todoList.filter((_, i) => i !== index); // Filter out task by index
    setTodoList(updatedList); // Update state
  };

  // Function to handle Enter key press
  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleAddTask();
    }
  };

  return (
    <div>
      <h1>Todo List App</h1>
      <div>
        <input
          type="text"
          placeholder="Enter a task"
          value={task}
          onChange={(e) => setTask(e.target.value)} // Update input value
          onKeyPress={handleKeyPress} // Add task on Enter key press
        />
        <button onClick={handleAddTask}>Add</button>
      </div>
      <ul>
        {todoList.map((todo, index) => (
          <li key={index}>
            {todo}
            <button onClick={() => handleDeleteTask(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoApp;
