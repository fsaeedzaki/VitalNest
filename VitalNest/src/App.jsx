import {BrowserRouter,Routes,Route,Link,Navigate} from "react-router-dom";
import Home from './pages/Home.jsx';
import TasksPage from "./pages/TaskPage.jsx";
import Problems from "./pages/Problems.jsx";
import Welcome from "./pages/Welcome.jsx";
import './App.css';
import Tips from "./pages/Tips.jsx";
import DonationPage from "./pages/donation.jsx";
import Bot from "./components/AI assistant.jsx";
function App (){
  return(
    
      <div className="App">
        
      <BrowserRouter>
        <nav>
          <Link to="/Home"> Home </Link>
          <Link to="/milestones"> Milestones </Link>
          <Link to="/problems"> Problems </Link>
          <Link to="/tips"> Tips </Link>
          <Link to="/donate"> Donate </Link>
          <Link to="/bot"> AI Assistant </Link>
          {/* <Link to="/About"> About </Link> */}
          {/* Add more navigation links here */}
        </nav>
        <div className="content">
          <Routes>
            <Route path="/donate" element={<DonationPage/>}/>
            <Route path="/" element={<Welcome/>}/>
            <Route path="/Home" element={<Home/>}/>
            <Route path="/milestones" element={<TasksPage/>}/>
            <Route path="/problems" element={<Problems/>}/>
            <Route path="/tips" element={<Tips/>} />
            <Route path="*" element={<Navigate to="/"/>}/>
            <Route path="/bot" element={<Bot/>}/>
            {/* <Route path="/About" element={<About/>}/> */}
            {/* Add more routes here */}
          </Routes>

        </div>
      </BrowserRouter>
      </div>
  );
}
export default App;