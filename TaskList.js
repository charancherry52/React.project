import React from 'react';

// TaskList Component: Renders the list of tasks
const TaskList = ({ tasks, onDeleteTask, onToggleTask }) => {
    if (tasks.length === 0) {
        return <p className="empty-message">No tasks found. Add one above!</p>;
    }

    return (
        <ul className="task-list">
            {tasks.map((task) => (
                <li key={task.id} className={task.completed ? 'completed' : ''}>
                    <span onClick={() => onToggleTask(task.id)}>
                        {task.text}
                    </span>
                    <button onClick={() => onDeleteTask(task.id)} className="delete-btn">
                        Delete
                    </button>
                </li>
            ))}
        </ul>
    );
};

export default TaskList;
