import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import "./App.css";
import Login from "./pages/login/login";
import Home from "./pages/Home/Home";

function App() {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<Navigate to="/Portfolio/dashboard/" />} />
        <Route path="/Portfolio/dashboard/" element={<Home />} />
        <Route path="/Portfolio/login" element={<Login />} />
        <Route path="/Portfolio" element={<Home />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
