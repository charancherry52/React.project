import React, { useState } from 'react';
import './App.css';
import TaskInput from './components/TaskInput';
import TaskList from './components/TaskList';
import Filter from './components/Filter';

function App() {
  // State for managing tasks
  const [tasks, setTasks] = useState([]);

  // State for managing filter (all, completed, pending)
  const [filter, setFilter] = useState('all');

  // Function to add a new task
  const addTask = (text) => {
    const newTask = {
      id: Date.now(), // Simple unique ID generation
      text: text,
      completed: false
    };
    setTasks([...tasks, newTask]);
  };

  // Function to delete a task
  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  // Function to toggle task completion status
  const toggleTask = (id) => {
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  // Filter tasks based on the current filter state
  const filteredTasks = tasks.filter(task => {
    if (filter === 'completed') return task.completed;
    if (filter === 'pending') return !task.completed;
    return true; // 'all'
  });

  return (
    <div className="App">
      <div className="container">
        <h1>Student Task Manager</h1>

        <TaskInput onAddTask={addTask} />

        <Filter filter={filter} setFilter={setFilter} />

        <TaskList
          tasks={filteredTasks}
          onDeleteTask={deleteTask}
          onToggleTask={toggleTask}
        />
      </div>
    </div>
  );
}

export default App;
