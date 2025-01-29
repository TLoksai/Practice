import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import { NavbarComponent } from "./Frontend/shared/components/NavbarComponent";
import { Footer1 } from "./Frontend/shared/components/Footer";
import Register from "./Frontend/Pages/Register";
import Login from "./Frontend/Pages/Login";
import About from "./Frontend/Pages/About";
import SetupGuide from "./Frontend/Pages/SetupGuide";
import Contact from "./Frontend/Pages/Contact";
import Home from "./Frontend/Pages/Home";
import Dashboard from "./Frontend/Pages/Dashboard"; // Import Dashboard
import BarChart from "./Frontend/components/Charts/BarChart"; // Import BarChart here
import PieChart from "./Frontend/components/PieChart";

const App: React.FC = () => {
  return (
    <Router>
      <div className="app-container">
        <NavbarComponent />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/about" element={<About />} />
          <Route path="/setup-guide" element={<SetupGuide />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/dashboard" element={<Dashboard />} />  {/* Add Dashboard route here */}
        </Routes>
        <Footer1 />
      </div>
    </Router>
  );
};

export default App;
