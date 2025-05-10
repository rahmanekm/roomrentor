import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Navigate
} from "react-router-dom";

// Import components
import Signup from './components/signup/Signup';
import Login from './components/login/Login';
import RoomsList from './components/roomslist/RoomsList';
import Home from './components/home/Home';
import Footer from './components/footer/Footer';
import appLogo from './images/logo.jpg'; // Corrected import path for the logo

function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [Route]); // This might need adjustment based on how react-router-dom handles route changes for this effect

  return (
    <div>
      <Router>
        <nav className="navbar-spareroom">
          <div className="navbar-container-spareroom">
            <Link to="/" className="navbar-logo-spareroom" onClick={() => isMobileMenuOpen && toggleMobileMenu()}>
              <img src={appLogo} alt="RoomRentor Logo" className="navbar-logo-image-spareroom" />
              <span className="navbar-logo-text-spareroom">RoomRentor</span>
            </Link>
            
            <button className="mobile-menu-toggle-spareroom" aria-label="Open navigation menu" onClick={toggleMobileMenu}>
              {isMobileMenuOpen ? (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="3" y1="12" x2="21" y2="12"></line>
                  <line x1="3" y1="6" x2="21" y2="6"></line>
                  <line x1="3" y1="18" x2="21" y2="18"></line>
                </svg>
              )}
            </button>

            {/* Apply 'active' class to show menu on mobile */}
            <div className={`navbar-links-spareroom ${isMobileMenuOpen ? 'active' : ''}`}>
              <ul className="nav-menu-spareroom">
                <li className="nav-item-spareroom">
                  <Link to="/find-a-room" className="nav-link-spareroom" onClick={toggleMobileMenu}>Find a Room</Link>
                </li>
                <li className="nav-item-spareroom">
                  <Link to="/flatmates" className="nav-link-spareroom" onClick={toggleMobileMenu}>Flatmates</Link>
                </li>
                <li className="nav-item-spareroom">
                  <Link to="/advice" className="nav-link-spareroom" onClick={toggleMobileMenu}>Advice</Link>
                </li>
                <li className="nav-item-spareroom">
                  <Link to="/blog" className="nav-link-spareroom" onClick={toggleMobileMenu}>Blog</Link>
                </li>
                 {/* Moving action links into the mobile menu for better UX on small screens */}
                <li className="nav-item-spareroom mobile-only-action-links">
                  <Link to="/login" className="nav-link-spareroom action-link-spareroom" onClick={toggleMobileMenu}>Log in</Link>
                </li>
                <li className="nav-item-spareroom mobile-only-action-links">
                  <Link to="/register" className="nav-link-spareroom action-link-spareroom" onClick={toggleMobileMenu}>Sign up</Link>
                </li>
              </ul>
            </div>

            {/* Desktop-only action links */}
            <div className="navbar-actions-spareroom desktop-only">
              <Link to="/post-ad" className="nav-button-spareroom post-ad-button-spareroom">List Your Ad</Link>
              <Link to="/login" className="nav-link-spareroom action-link-spareroom">Log in</Link>
              <Link to="/register" className="nav-link-spareroom action-link-spareroom">Sign up</Link>
            </div>
          </div>
        </nav>

        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/rooms" element={<RoomsList />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Signup />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
