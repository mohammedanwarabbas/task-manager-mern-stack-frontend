import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL; // API Base URL

const Login = ({setIsAuthenticated}) => {
  const navigate = useNavigate();

  // State for form inputs
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);

  // Handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await axios.post(`${API_BASE_URL}/api/auth/login`, formData);
      
      // Store token in localStorage
      localStorage.setItem("token", response.data.token);
      setIsAuthenticated(true);
      toast.success("Login Successful!");
      navigate("/tasks"); // Redirect to tasks page
    } catch (error) {
      toast.error(error.response?.data?.message || "Login failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container login-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit} className="row d-flex justify-content-center flex-column">
        {/* Email Field */}
        <div className="col-md-8 mx-auto">
          <label className="form-label">Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>

        {/* Password Field */}
        <div className="col-md-8 mx-auto">
          <label className="form-label">Password:</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>

        {/* Submit Button */}
        <button type="submit" disabled={loading} className="col-md-9 mx-auto btn btn-primary mt-4">
          {loading ? "Logging in..." : "Login"}
        </button>
      </form>
    </div>
  );
};

export default Login;
