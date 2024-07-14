import React, { Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

const Home = React.lazy(() => import("./pages/Home"));
const Contact = React.lazy(() => import("./pages/Contact"));
const Sales = React.lazy(() => import("./pages/Sales"));
const About = React.lazy(() => import("./pages/About"));

const App = () => {
  return (
    <Router>
        <Navbar />
      <div className="content">
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/sales" element={<Sales />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </Suspense>
      </div>
        <Footer />
    </Router>
  );
};

export default App;
