import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import "./App.css";
import Login from "./pages/login/login";
import Home from "./pages/Home/Home";

function App() {
  return (
    <Router>
      <Routes>
        <Route  path="/Portfolio/dashboard/" element={<Home />} />
        <Route path="/Portfolio/login" element={<Login />} />
        <Route path="/Portfolio"  element={<Home />}></Route>
        <Route path="*" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
