import React, { useState } from 'react';

// TaskInput Component: Handles adding new tasks
const TaskInput = ({ onAddTask }) => {
  const [taskText, setTaskText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validate that the task is not empty
    if (taskText.trim()) {
      onAddTask(taskText);
      setTaskText(''); // Clear input after adding
    }
  };

  return (
    <form className="task-input" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Add a new task..."
        value={taskText}
        onChange={(e) => setTaskText(e.target.value)}
      />
      <button type="submit">Add</button>
    </form>
  );
};

export default TaskInput;
