import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import Navbar from './components/navbar';
import Footer from './components/footer';
import Home from './components/home';
import Privacy from './components/privacy';
import Terms from './components/terms';
import AboutUs from './components/aboutus';
import ContactUs from './components/cantactus';
import Career from './components/carrear';
import FreeTraining from './components/freetraning';
import Work from './components/work';
// import GetStart from './components/getstart';
import ScrollToTop from "./components/webfun/ScrollToTop"; 

// Optional: 404 Not Found Component
const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-50 to-gray-100">
      <div className="text-center p-8">
        {/* Animated 404 */}
        <h1 className="text-9xl font-extrabold text-purple-600 drop-shadow-lg">
          404
        </h1>
        <p className="mt-4 text-2xl font-semibold text-gray-800">
          Oops! Page not found
        </p>
        <p className="mt-2 text-gray-600">
          The page you’re looking for doesn’t exist or has been moved.
        </p>

        {/* Button */}
        <Link
          to="/"
          className="inline-block mt-6 px-6 py-3 bg-purple-600 text-white font-medium rounded-xl shadow-md hover:bg-purple-700 hover:scale-105 transition-transform"
        >
          Oops, Wrong Turn!
        </Link>
      </div>
    </div>
  );
};

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="App">
        <Navbar />
        <div className="min-h-screen">
          <Routes>
            {/* Main Pages */}
            <Route path="/" element={<Home />} />
            <Route path="/work" element={<Work />} />
            {/* <Route path="/get-started" element={<GetStart />} /> */}

            {/* Company Pages */}
            <Route path="/about" element={<AboutUs />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/career" element={<Career />} />

            {/* Resources Pages */}
            <Route path="/free-training" element={<FreeTraining />} />

            {/* Footer Routes */}
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/terms" element={<Terms />} />

            {/* 404 Page */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;