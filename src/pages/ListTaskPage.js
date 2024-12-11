import React from 'react';
import TaskList from '../components/TaskList';

const ListTaskPage = ({ tasks, onEditTask, onDeleteTask }) => {
    return (
        <div className='d-flex-center'>
            <h2 className='clr-beigh'>Task List</h2>
            <TaskList tasks={tasks} onEditTask={onEditTask} onDeleteTask={onDeleteTask} />
        </div>
    );
};

export default ListTaskPage;
