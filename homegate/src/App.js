import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './components/Login';
import Signup from './components/Signup';
import Homegate from './Homegate';
import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
       <Navbar />
       <Routes>
        <Route path="/" element={<Homegate />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </Router>
  );
}

export default App;
