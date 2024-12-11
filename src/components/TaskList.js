import React from 'react';

const TaskList = ({ tasks, onEditTask, onDeleteTask }) => {
    return (
        <div className="task-list">
            {tasks.length > 0 ? (
                <table>
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Description</th>
                            <th>Due Date</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {tasks.map((task) => (
                            <tr key={task.id}>
                                <td>{task.title}</td>
                                <td>{task.description || 'N/A'}</td>
                                <td>{task.dueDate}</td>
                                <td>
                                    <button onClick={() => onEditTask(task)}>Edit</button>
                                    <button onClick={() => onDeleteTask(task.id)}>Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            ) : (
                <p>No tasks available. Add a task to get started!</p>
            )}
        </div>
    );
};

export default TaskList;
