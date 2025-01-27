import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import { NavbarComponent } from "./Frontend/components/NavbarComponent";
import { Footer1 } from "./Frontend/components/Footer1";
import Register from "./Frontend/Pages/Register";
import Login from "./Frontend/Pages/Login";
import About from "./Frontend/Pages/About";
import SetupGuide from "./Frontend/Pages/SetupGuide";
import Contact from "./Frontend/Pages/Contact";
import Home from "./Frontend/Pages/Home";
import Dashboard from "./Frontend/Pages/Dashboard";
import BarChart from "./Frontend/components/Charts/BarChart";

import PieChart from "./Frontend/components/PieChart";
import JobList from "./Frontend/components/JobList";

// Sample data for PieChart component
const pieChartData = [
  ['Source', 'Applicants'],
  ['Career Page', 10],
  ['LinkedIn', 20],
  ['Naukri', 30],
  ['Referral', 15],
  ['Indeed', 25],
  ['Times Jobs', 20],
];

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
          <Route path="/dashboard" element={<Dashboard />}>
            
          </Route>
          <Route path="/jobs" element={<JobList />} />  {/* New route for job list */}
        </Routes>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <PieChart data={pieChartData} title="By Source" />
        </div>
        <BarChart />
        <Footer1 />
      </div>
    </Router>
  );
};

export default App;
