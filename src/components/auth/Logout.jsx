import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Logout = ({setIsAuthenticated}) => {
  const navigate = useNavigate();

  useEffect(() => {
    // Remove token from local storage
    localStorage.removeItem("token");
    setIsAuthenticated(false);
    // Redirect to login page
    navigate("/login");
  }, [navigate]);

  return null; // No UI needed
};

export default Logout;
