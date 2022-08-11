
import { Landing } from './landing/Landing';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Feed } from './feed/feed';
import TrainerBoard from './trainer/trainerBoard';
import ProjectList from './projects/ProjectList';
import AllProjects from './projects/AllProjects';
import Trainees from './show/trainees';
import Managers from './show/manager';
import Trainers from './show/trainers';
import ProjectDetails from './projects/ProjectDetails';
import Signin from './auth/Signin';
import Signup from './auth/Signup';
import CreateProject from './projects/CreateProject';


function App() {
  return (
    <div >
      
      <Router>
        <Routes>
          <Route exact path="/" element={<Landing />} />
          <Route exact path="/feed" element={<Feed />} />
          <Route exact path="/trainer" element={<TrainerBoard />} />
          <Route exact path="/projects" element={<AllProjects/>} />
          <Route exact path="/project" element={<ProjectDetails/>} />
          <Route exact path="/trainees" element={<Trainees/>} />
          <Route exact path="/trainers" element={<Trainers/>} />
          <Route exact path="/managers" element={<Managers/>} />
          <Route exact path="/login" element={<Signin/>} />
          <Route exact path="/signup" element={<Signup/>} />
          <Route exact path="/addproject" element={<CreateProject/>} />


          





        </Routes>
      </Router>
    </div>
  );
}

export default App;
