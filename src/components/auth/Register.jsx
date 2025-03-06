import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";
const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

const Register = () => {
  const navigate = useNavigate();
  
  // State to store form inputs
  const [formData, setFormData] = useState({
    name: "",email: "",password: "",
  });

  const [loading, setLoading] = useState(false);

  // Function to update form state on input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await axios.post(`${API_BASE_URL}/api/auth/register`, formData);
      toast.success(response.data.message);
      navigate("/login"); // Redirect to login page after successful registration
    } catch (error) {
      toast.error(error.response?.data?.message || "Registration failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container register-container"> 
      <h2>Register</h2>
      <form onSubmit={handleSubmit} className="row d-flex justify-content-center flex-column">
        
        {/* Name Field */}
        <div className="col-md-8 mx-auto">
          <label className="form-label">Name:</label>
          <input type="text" name="name" value={formData.name} onChange={handleChange} className="form-control" required />
        </div>

        {/* Email Field */}
        <div className="col-md-8 mx-auto">
          <label className="form-label">Email:</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} className="form-control" required />
        </div>

        {/* Password Field */}
        <div className="col-md-8 mx-auto">
          <label className="form-label">Password:</label>
          <input type="password" name="password" value={formData.password} onChange={handleChange} className="form-control" required minLength="6" placeholder="min 6 charecters" />
        </div>

        {/* Submit Button */}
        <button type="submit" className="btn btn-primary mt-4 col-md-9 d-flex justify-content-center text-center mx-auto" disabled={loading}>
          {loading ? "Registering..." : "Register"}
        </button>
      </form>
    </div>
  );
};

export default Register