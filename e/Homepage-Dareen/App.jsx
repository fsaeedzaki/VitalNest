import {BrowserRouter,Routes,Route,Link} from "react-router-dom";
import Home from "c:/Users/ADMIN/Desktop/protons/TASK6/REACT/app/pages/Home";
function App (){
  return(
  
    <div>
      <nav>
      
        <Link to="/Home"> Home</Link>
      </nav>
    <Routes>
      <Route path="/Home" element={<Home/>}/>
      
    </Routes>
    </div>
  );
}
export default App;