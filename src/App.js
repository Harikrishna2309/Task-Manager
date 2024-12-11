import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import AddTaskPage from './pages/AddTaskPage';
import ListTaskPage from './pages/ListTaskPage';
import HomePage from './pages/HomePage';
import EditTaskModal from './components/EditTaskModal';
import '../src/css/Style.css';

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
        <Router>
            <div className="app">
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/add-task">Add Task</Link>
                        </li>
                        <li>
                            <Link to="/list-tasks">List Tasks</Link>
                        </li>
                    </ul>
                </nav>

                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route
                        path="/add-task"
                        element={<AddTaskPage onAddTask={addTask} />}
                    />
                    <Route
                        path="/list-tasks"
                        element={
                            <ListTaskPage
                                tasks={tasks}
                                onEditTask={setEditingTask}
                                onDeleteTask={deleteTask}
                            />
                        }
                    />
                </Routes>

                {editingTask && (
                    <EditTaskModal
                        task={editingTask}
                        onClose={() => setEditingTask(null)}
                        onSave={updateTask}
                    />
                )}
            </div>
        </Router>
    );
};

export default App;
