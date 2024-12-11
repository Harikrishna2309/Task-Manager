import React from 'react';
import AddTask from '../components/AddTask';

const AddTaskPage = ({ onAddTask }) => {
    return (
        <div className='d-flex-center'>
            <h2>Add Task</h2>
            <AddTask onAddTask={onAddTask} />
        </div>
    );
};

export default AddTaskPage;
