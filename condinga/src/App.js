
import { Landing } from './landing/Landing';
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { Feed } from './feed/feed';
import TrainerBoard from './trainer/trainerBoard';
import ProjectList from './projects/ProjectList';
import AllProjects from './projects/AllProjects';
import Trainees from './show/trainees';
import Managers from './show/manager';
import Trainers from './show/trainers';
import ProjectDetails from './projects/ProjectDetails';

import Signup from './auth/Signup';
import CreateProject from './projects/CreateProject';
import { Signin } from './auth/Signin';
import { useContext } from 'react';
import { AuthContext, AuthContextProvider } from './context/AuthContext';


function App() {

  const {currentUser}= useContext(AuthContext)


  const RequireAuth = ({ children }) => {
    return currentUser ? children : <Navigate to="/login" />;
  };
  console.log(currentUser)
  return (
    <div >
   

      <Router>
        <Routes>
          <Route  path="/signup" element={<Signup />} />
          <Route  path="/" element={<Landing />} />
          <Route   path="/login" element={<Signin />} />
          <Route  path="/feed" element={<RequireAuth><Feed /></RequireAuth>} />
          <Route  path="/projects" element={<RequireAuth><AllProjects /></RequireAuth>} />
          <Route  path="/trainer" element={<RequireAuth><TrainerBoard /></RequireAuth>} />
          <Route  path="/project"  element={<RequireAuth><ProjectDetails /></RequireAuth>} />
          <Route  path="/trainees" element={<RequireAuth><Trainees /></RequireAuth>} />
          <Route  path="/trainers" element={<RequireAuth><Trainers /></RequireAuth>} />
          <Route  path="/managers" element={<RequireAuth><Managers /></RequireAuth>} />
          <Route  path="/addproject" element={<RequireAuth><CreateProject /></RequireAuth>} /> 








        </Routes>
      </Router>
    

    </div>
  );
}

export default App;
