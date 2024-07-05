import React from "react";

const TaskList = () => {
    const tasks = [
        {id: 1, name: "Task 1", description: "Description 1"},
        {id: 2, name: "Task 2", description: "Description 2"},
    ];

    return (
        <div>
            {tasks.map(task => (
                <div key={task.id} className="bg-white p-4 shadow-md rounded mb-4">
                    <h3 className="text-ul">{task.name}</h3>
                    <p>{task.description}</p>
                </div>
            ))}
        </div>
    )
};

export default TaskList;