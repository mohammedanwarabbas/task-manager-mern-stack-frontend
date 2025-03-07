import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState,useEffect } from 'react';
import './styles/global.css';
import {BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom'
import ProtectedRoute from "./components/auth/ProtectedRoute"
import Header from "./components/layout/Header"
import Footer from "./components/layout/Footer"
import Register from "./components/auth/Register"
import Login from "./components/auth/Login"
import Logout from "./components/auth/Logout"
import TaskList from "./components/tasks/TaskList.jsx"
import CreateTask from "./components/tasks/CreateTask"
import EditTask from "./components/tasks/EditTask"
import About from "./components/about/About"

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(
    !!localStorage.getItem("token") // Convert token existence to boolean
  );

  useEffect(() => {
    setIsAuthenticated(!!localStorage.getItem("token"));
  }, []);
  return (
   <>
   <Router>
    <Header isAuthenticated={isAuthenticated}/>
    <Routes>
      {/* Public Routes */}
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login setIsAuthenticated={setIsAuthenticated} />} />
      <Route path="/about" element={<About />} />
      <Route path="/logout" element={<Logout setIsAuthenticated={setIsAuthenticated} />} />
      <Route path="*" element={<Navigate to="/login" />} />
      {/* Protected Routes */}
      <Route element={<ProtectedRoute/>}>
        <Route path="/" element={< TaskList/>}/>
        <Route path="/tasks" element={<TaskList />} />
        <Route path="/task/create" element={<CreateTask/>}/>
        <Route path="/task/edit/:id" element={<EditTask/>}/>

      </Route>
    </Routes>
    <Footer />
   </Router>
   <ToastContainer position="top-right" autoClose={3000} />
   </>
  );
}

export default App;
