import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate
} from "react-router-dom";

import Home from './pages/Home'
import Skill from './pages/Skillset'
import Project from './pages/Projects'
import Resume from './pages/Resume'
import Contact from './pages/Contact'
import HomeAllSections from './pages/HomeAllSections';

import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import LoadingAnimation from "./components/LoadingAnimation";
import ScrollToTop from "./components/ScrollToTop"
import ThemeToggle from "./components/ThemeToggle"
import SmoothScroll from "./components/SmoothScroll";
import ScrollIndicator from "./components/ScrollIndicator";

import "./App.css";
import "./style.css";
import "./components/SmoothScroll.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [loading, setLoading] = useState(true);

  const finishLoading = () => {
    setLoading(false);
  };

  return (
    <Router>
      <LoadingAnimation finishLoading={finishLoading} />
      <div className="App" id={loading ? "no-scroll" : "scroll"}>
        {!loading && (
          <SmoothScroll>
            <Navbar />
            <ScrollToTop />
            <ThemeToggle />
            <ScrollIndicator />
            <Routes>
              <Route path="/" element={<HomeAllSections />} />
              <Route path="/home" element={<Home />} />
              <Route path="/skillset" element={<Skill />} />
              <Route path="/project" element={<Project />} />
              <Route path="/resume" element={<Resume />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="*" element={<Navigate to="/"/>} />
            </Routes>
            <Footer />
          </SmoothScroll>
        )}
      </div>
    </Router>
  );
}

export default App;
