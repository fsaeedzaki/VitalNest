import {BrowserRouter,Routes,Route,Link,Navigate} from "react-router-dom";
import Home from './pages/Home.jsx';
import TasksPage from "./pages/TaskPage.jsx";
import Problems from "./pages/Problems.jsx";
import Welcome from "./pages/Welcome.jsx";
import './App.css';
import Tips from "./pages/Tips.jsx";

function App (){
  return(
    
      <div className="App">
        
      <BrowserRouter>
        <nav>
          <Link to="/Home"> Home </Link>
          <Link to="/milestones"> Milestones </Link>
          <Link to="/problems"> Problems </Link>
          <Link to="/tips"> Tips </Link>
          {/* <Link to="/About"> About </Link> */}
          {/* Add more navigation links here */}
        </nav>
        <div className="content">
          <Routes>
            <Route path="/" element={<Welcome/>}/>
            <Route path="/Home" element={<Home/>}/>
            <Route path="/milestones" element={<TasksPage/>}/>
            <Route path="/problems" element={<Problems/>}/>
            <Route path="/tips" element={<Tips/>} />
          </Routes>
        </div>
      </BrowserRouter>
      </div>
  );
}
export default App;