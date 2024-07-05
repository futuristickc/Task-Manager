import React from "react";

const TaskForm = () => {
    return (
        <form className="bg-white p-4 shadow-md rounded">
            <div className="mb-4">
                <label className="block text-gray-700">
                    Task Name
                </label>
                <input type="text" className="mt-1 block w-full p-2 border rounded" />
            </div>
            <div className="mb-4">
                <label className="block text-gray-700">
                    Description
                </label>
                <textarea className="mt-1 block w-full p-2 border rounded"></textarea>
            </div>
            <button type="submit" className="bg-blue-600 text-white p-2 rounded">
                Add Task
            </button>
        </form>
    )
};

export default TaskForm;