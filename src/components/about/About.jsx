/* this component represents the About page of the application.
 It provides information about the application, its purpose, and key features. */
 import React from "react";
 import { Helmet } from 'react-helmet'
 
 const About = () => {
   return (
     <>
     <Helmet>
       <title>Task Manager | About-us</title>
     </Helmet>
     <div className="container py-5">
       <div className="row">
         <div className="col-12 text-center">
           <h1 className="display-4">Project Information</h1>
           <p className="lead">
            MERN stack project by <strong>Mohammed Anwar</strong>
           </p>
         </div>
       </div>
       <div className="row">
         <div className="col-lg-6">
           <h3>🚀 Project Goal</h3>
           <p>
           The Task Manager is a full-stack web application built using the MERN (MongoDB, Express.js, React.js, Node.js) stack. It allows users to manage their daily tasks efficiently by providing features such as task creation, updating, deletion, categorization, and user authentication.
           </p>
           <p>
             Technologies and tools used in the development of this project
             include:
           </p>
           <ul>
             <li>HTML</li>
             <li>CSS</li>
             <li>JavaScript</li>
             <li>Bootstrap</li>
             <li>ReactJS</li>
             <li>Node.js</li>            
             <li>Express</li>
             <li>MongoDB</li>
             <li>React Router DOM</li>
             <li>React Helmet</li>
             <li>Axios</li>
           </ul>
           <p>This reactjs connected with the backend nodejs project that handles user and task data with connection to mongodb and it has 2 collections : </p>
           <ul>
             <li>
               <p><strong>Users collection</strong> for handling user registration data</p>
             </li>
             <li>
              <p><strong>Tasks collection</strong> for handling task addition,deletion,updation etc</p>
             </li>
           </ul>
         </div>
         <div className="col-lg-6">
           <h3>Folder Structure</h3>
           <pre className="bg-info text-dark p-3 rounded-3">
             {`

task-manager/
├── task-manager-frontend/   # React frontend
├── task-manager-backend/    # Node.js + Express backend


 task-manager/
 ├── task-manager-frontend/   # Frontend React app
 │   ├── src/
 │   │   ├── api/             # API calls (e.g., authentication, tasks)
 │   │   │   ├── authApi.ts
 │   │   │   ├── taskApi.ts
 │   │   │   └── axiosInstance.ts  # Axios configuration
 │   │   ├── assets/          # Images, icons, etc.
 │   │   ├── components/
 │   │   │   ├── Layout/      # Common UI components (Navbar, Footer)
 │   │   │   │   ├── Header.tsx
 │   │   │   │   ├── Footer.tsx
 │   │   │   │   └── Sidebar.tsx
 │   │   │   ├── Auth/        # Login & Register components
 │   │   │   │   ├── Login.tsx
 │   │   │   │   ├── Register.tsx
 │   │   │   │   ├── Logout.tsx
 │   │   │   ├── Tasks/       # Task-related components
 │   │   │   │   ├── TaskList.tsx
 │   │   │   │   ├── CreateTask.tsx
 │   │   │   │   ├── EditTask.tsx
 │   │   │   │   └── TaskCard.tsx
 │   │   │   ├── Shared/      # Common reusable components
 │   │   │   │   ├── Button.tsx
 │   │   │   │   ├── LoadingSpinner.tsx
 │   │   │   │   ├── Modal.tsx
 │   │   ├── context/         # Global state management (optional)
 │   │   │   ├── AuthContext.tsx
 │   │   │   ├── TaskContext.tsx
 │   │   ├── hooks/           # Custom hooks (e.g., useAuth, useTasks)
 │   │   │   ├── useAuth.ts
 │   │   │   ├── useTasks.ts
 │   │   ├── pages/           # Page-level components
 │   │   │   ├── Home.tsx
 │   │   │   ├── Dashboard.tsx
 │   │   │   ├── NotFound.tsx
 │   │   ├── routes/          # Route management
 │   │   │   ├── AppRoutes.tsx
 │   │   ├── styles/          # Global styles, CSS Modules, or Tailwind
 │   │   │   ├── global.css
 │   │   ├── utils/           # Helper functions
 │   │   │   ├── formatDate.ts
 │   │   │   ├── validateForm.ts
 │   │   ├── App.tsx
 │   │   ├── index.tsx
 │   │   ├── main.tsx
 │   │   ├── vite.config.ts   # If using Vite
 │   │   ├── tsconfig.json    # TypeScript config
 │   │   ├── package.json
 │   ├── public/
 │   │   ├── index.html
 │   │   ├── manifest.json
 │   │   ├── logo.svg
 │   ├── .env
 │   ├── .gitignore
 │
 ├── task-manager-backend/   # Backend (Node.js + Express + MongoDB)
 │   ├── src/
 │   │   ├── config/          # Configuration files (DB, JWT, CORS)
 │   │   │   ├── db.ts
 │   │   │   ├── env.ts
 │   │   │   ├── cors.ts
 │   │   ├── controllers/     # Controller functions (business logic)
 │   │   │   ├── authController.ts
 │   │   │   ├── taskController.ts
 │   │   ├── middleware/      # Middleware (auth, error handling)
 │   │   │   ├── authMiddleware.ts
 │   │   │   ├── errorHandler.ts
 │   │   ├── models/          # Mongoose models
 │   │   │   ├── User.ts
 │   │   │   ├── Task.ts
 │   │   ├── routes/          # API routes
 │   │   │   ├── authRoutes.ts
 │   │   │   ├── taskRoutes.ts
 │   │   ├── services/        # Service layer for business logic
 │   │   ├── utils/           # Helper functions
 │   │   ├── app.ts           # Express app setup
 │   │   ├── server.ts        # Server entry point
 │   ├── .env
 │   ├── .gitignore
 │   ├── package.json
 │   ├── tsconfig.json
 │   ├── nodemon.json
 │   ├── README.md
 │
 ├── README.md
 ├── package.json
 ├── .gitignore

 `}
           </pre>
         </div>
       </div>
     </div>
     </>
   );
 };
 
 export default About;