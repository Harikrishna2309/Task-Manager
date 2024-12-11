import React, { useState } from 'react';
import AddTask from './components/AddTask';
import TaskList from './components/TaskList';
import EditTaskModal from './components/EditTaskModal';

const App = () => {
    const [tasks, setTasks] = useState([]);
    const [editingTask, setEditingTask] = useState(null);

    const addTask = (task) => setTasks([...tasks, task]);

    const deleteTask = (taskId) => {
        if (window.confirm("Are you sure you want to delete this task?")) {
            setTasks(tasks.filter((task) => task.id !== taskId));
        }
    };

    const updateTask = (updatedTask) => {
        setTasks(tasks.map((task) => (task.id === updatedTask.id ? updatedTask : task)));
    };

    return (
        <div className="app">
            <h1>Task Manager</h1>
            <AddTask onAddTask={addTask} />
            <TaskList tasks={tasks} onEditTask={setEditingTask} onDeleteTask={deleteTask} />
            {editingTask && (
                <EditTaskModal
                    task={editingTask}
                    onClose={() => setEditingTask(null)}
                    onSave={updateTask}
                />
            )}
        </div>
    );
};

export default App;
