import Employee from "./components/Employee";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import Signup from "./components/Signup";
import { SharedState } from "./context/SharedState";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div>
      <SharedState>
        <Router>
          <Navbar/>
          
          <Routes>
            <Route exact path="/" element={<Login/>} />
            <Route exact path="/signup" element={<Signup/>} />
            <Route exact path="/list" element={<Employee/>} />

          </Routes>
        </Router>
      </SharedState>
    </div>
  );
}

export default App;
