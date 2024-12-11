import React from 'react';
import TaskList from '../components/TaskList';

const ListTaskPage = ({ tasks, onEditTask, onDeleteTask }) => {
    return (
        <div>
            <h2>Task List</h2>
            <TaskList tasks={tasks} onEditTask={onEditTask} onDeleteTask={onDeleteTask} />
        </div>
    );
};

export default ListTaskPage;
