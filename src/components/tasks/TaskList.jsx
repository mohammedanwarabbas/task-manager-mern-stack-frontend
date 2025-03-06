import React, { useEffect, useState } from "react";
import axios from "axios";
import EditTask from "./EditTask"; // Import the EditTask component
import {toast} from 'react-toastify'

const TaskList = () => {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [editingTaskId, setEditingTaskId] = useState(null); // State to track task being edited

  const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;
  const token = localStorage.getItem("token");

  useEffect(() => {
    fetchTasks();
  }, [editingTaskId]);

  const fetchTasks = async () => {
    try {
      const response = await axios.get(`${API_BASE_URL}/api/tasks`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setTasks(response.data);
    } catch (error) {
      console.error("Error fetching tasks:", error);
    } finally {
      setLoading(false);
    }
  };

  // Function to handle the edit button click
  const handleEditClick = (taskId) => {
    setEditingTaskId(taskId); // Set the selected task for editing
  };

  // Function to deleting the task
  const handleDelete = async (taskId) => {
    if (!window.confirm("Are you sure you want to delete this task?")) return;

    try {
        await axios.delete(`${API_BASE_URL}/api/tasks/${taskId}`, {
            headers: { Authorization: `Bearer ${token}` },
        });

        toast.success("Task deleted successfully!");

        // Remove the deleted task from state immediately
        setTasks(tasks.filter(task => task._id !== taskId));
    } catch (error) {
        toast.error(error.response?.data?.message || "Failed to delete task");
    }
};

 
  return (
    <div className="container py-4">
      <h2 className="text-center mb-4">All Tasks</h2>

      {editingTaskId ? (
        <EditTask taskId={editingTaskId} setEditingTaskId={setEditingTaskId} />
      ) : loading ? (
        <div className="text-center">
          <div className="spinner-border text-primary" role="status"></div>
        </div>
      ) : tasks.length === 0 ? (
        <p className="text-center text-muted">No tasks found.</p>
      ) : (
        <div className="row">
          {tasks.map((task) => (
            <div key={task._id} className="col-md-6 col-lg-4 mb-4">
              <div className="card h-100 shadow-sm">
                <div className="card-body">
                  <h5 className="card-title text-primary">{task.title}</h5>
                  <p className="card-text">{task.description}</p>
                 
                    <p>Priority : 
                    <span className={`border rounded-3 px-1 ${task.priority==='Low'?"bg-success":task.priority==='Medium'?"bg-warning":"bg-danger"}`}> {task.priority}</span>
                    </p>
                  <span className={`badge ${task.completed ? "bg-success" : "bg-warning"}`}>
                    {task.completed ? "Completed" : "Pending"}
                  </span>
                 
                  <div className="mt-3">
                    <button className="btn btn-sm btn-warning me-2" onClick={() => handleEditClick(task._id)}>
                      Edit
                    </button>
                    <button className="btn btn-danger" onClick={() => handleDelete(task._id)}>
            Delete
        </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default TaskList;
