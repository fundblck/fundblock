import {BrowserRouter, Routes, Route} from "react-router-dom";
import Signup from "./pages/sign-up/Signup";
import Signin from "./pages/sign-in/Signin";
import Home from "./pages/home/Home";
import SignupSubmit from "./pages/sign-up/SignupSubmit";
import ProjectCreation from "./pages/project-creation/CreateProject";
import ProjectDetails from "./pages/project-details/ProjectDetails";









function App() {
  return (
   
    <BrowserRouter>
    <Routes>
      
      <Route  path='/' element={<Home/>} />
      <Route  path="/sign-up" element={<Signup />} />
      <Route  path="/sign-in" element={<Signin />} />
      <Route  path="/signup-submit" element={<SignupSubmit />} />
      <Route  path='/create-project' element={<ProjectCreation/>}/>
      <Route  path='/project-details' element={<ProjectDetails/>} />
      
      
    </Routes>
    </BrowserRouter>

    
  );
}

export default App;

