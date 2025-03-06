import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const CreateTask = ({ onTaskCreated }) => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    priority: "Medium",
    dueDate: "",
    completed: false,
  });
  const [loading, setLoading] = useState(false);
  const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

  // Get JWT token from local storage
  const token = localStorage.getItem("token");

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value, // Handle checkbox separately
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await axios.post(`${API_BASE_URL}/api/tasks`, formData, {
        headers: {
          Authorization: `Bearer ${token}`, // Send JWT token in headers
        },
      });

      toast.success("Task created successfully!");
      setFormData({ title: "", description: "", priority: "Medium", dueDate: "", completed: false });
      if (onTaskCreated) onTaskCreated(); // Refresh task list if needed
    } catch (error) {
      toast.error(error.response?.data?.message || "Failed to create task");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container py-4">
      <h2 className="text-center mb-4">Create Task</h2>

      <form onSubmit={handleSubmit} className="row g-3 d-flex justify-content-center">
        {/* Title Field */}
        <div className="col-md-6">
          <label className="form-label">Task Title:</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>

        {/* Description Field */}
        <div className="col-md-6">
          <label className="form-label">Description:</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="form-control"
            rows="3"
          ></textarea>
        </div>

        {/* Priority Field */}
        <div className="col-md-6">
          <label className="form-label">Priority:</label>
          <select name="priority" value={formData.priority} onChange={handleChange} className="form-select">
            <option value="Low">Low</option>
            <option value="Medium">Medium</option>
            <option value="High">High</option>
          </select>
        </div>

        {/* Due Date Field */}
        <div className="col-md-6">
          <label className="form-label">Due Date:</label>
          <input type="date" name="dueDate" value={formData.dueDate} onChange={handleChange} className="form-control" />
        </div>

        {/* Completed Checkbox */}
        <div className="col-md-6 d-flex align-items-center">
          <input
            type="checkbox"
            name="completed"
            checked={formData.completed}
            onChange={handleChange}
            className="form-check-input me-2"
          />
          <label className="form-check-label">Completed</label>
        </div>

        {/* Submit Button */}
        <div className="col-12 text-center">
          <button type="submit" className="btn btn-primary" disabled={loading}>
            {loading ? "Creating..." : "Create Task"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateTask;
