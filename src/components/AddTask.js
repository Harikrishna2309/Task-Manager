import React, { useState } from 'react';

const AddTask = ({ onAddTask }) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [dueDate, setDueDate] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (title && dueDate) {
            onAddTask({ title, description, dueDate, id: Date.now() });
            setTitle('');
            setDescription('');
            setDueDate('');
        } else {
            alert("Please fill out the required fields.");
        }
    };

    return (
        
<form onSubmit={handleSubmit} className="add-task-form">
            <input
                type="text"
                placeholder="Task Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
            />
            <textarea
                placeholder="Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
            />
            <input
                type="date"
                value={dueDate}
                onChange={(e) => setDueDate(e.target.value)}
                required
            />
            <button type="submit">Add Task</button>
        </form>
       
        
    );
};

export default AddTask;
