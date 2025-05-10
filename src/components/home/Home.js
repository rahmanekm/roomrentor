import React, { useState, useEffect } from 'react'; // Added useEffect
import { Link } from "react-router-dom";

// Hero Slideshow Images
import HeroBg1 from "../../images/hero-background.jpg";
import HeroBg2 from "../../images/hero-background_1.jpg";
import HeroBg3 from "../../images/hero-background_2.jpg";
import HeroBg4 from "../../images/hero-background_3.jpg";

// Popular Location Images
import LondonLocationImage from "../../images/london-unsplash.jpg"; 
import ManchesterLocationImage from "../../images/manchester-unsplash.jpg"; 
import BirminghamLocationImage from "../../images/birmingham-unsplash.jpg";
import "../home/home.css";

// SVG Icon Components for "How it Works"
const SearchIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="11" cy="11" r="8"></circle>
    <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
  </svg>
);

const ConnectIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
</svg>
);

const MoveInIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4"></path>
  </svg>
);

const Home = () => {
    const [searchType, setSearchType] = useState('rooms'); // 'rooms', 'flatmates', 'properties'
    const heroImages = [HeroBg1, HeroBg2, HeroBg3, HeroBg4];
    const [currentHeroImageIndex, setCurrentHeroImageIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentHeroImageIndex(prevIndex => 
                prevIndex === heroImages.length - 1 ? 0 : prevIndex + 1
            );
        }, 5000); // Change image every 5 seconds (5000 milliseconds)

        return () => clearInterval(timer); // Cleanup interval on component unmount
    }, [heroImages.length]);

    return (
        <div className="home-spareroom">
            {/* Hero Section */}
            <div className="hero-section-spareroom" style={{ backgroundImage: `url(${heroImages[currentHeroImageIndex]})` }}>
                <div className="hero-overlay-spareroom"></div>
                <div className="hero-content-spareroom">
                    <h1>Your Next Chapter Starts Here.</h1>
                    <p>Find rooms, flatmates, and properties in East London.</p>
                    
                    <div className="search-box-spareroom">
                        <div className="search-type-selector">
                            <button 
                                className={searchType === 'rooms' ? 'active' : ''} 
                                onClick={() => setSearchType('rooms')}>
                                Rooms for Rent
                            </button>
                            <button 
                                className={searchType === 'flatmates' ? 'active' : ''} 
                                onClick={() => setSearchType('flatmates')}>
                                Flatmates
                            </button>
                            <button 
                                className={searchType === 'properties' ? 'active' : ''} 
                                onClick={() => setSearchType('properties')}>
                                Whole Properties
                            </button>
                        </div>
                        <form className="search-form-spareroom">
                            <input type="text" placeholder="Enter a location (e.g. 'London' or 'NW11AA')" className="location-input-spareroom" />
                            <div className="search-filters-spareroom">
                                <input type="number" placeholder="Min Rent (£pcm)" />
                                <input type="number" placeholder="Max Rent (£pcm)" />
                                <select>
                                    <option value="">Bedrooms</option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3+</option>
                                </select>
                            </div>
                            <button type="submit" className="search-button-spareroom">Search</button>
                        </form>
                        <div className="advanced-search-spareroom">
                            <Link to="/advanced-search">Advanced Search</Link>
                        </div>
                    </div>
                </div>
            </div>

            {/* How it Works Section */}
            <div className="how-it-works-spareroom section-padding-spareroom">
                <h2>How RoomRentor Works</h2>
                <div className="steps-spareroom">
                    <div className="step-spareroom">
                        <div className="step-icon-spareroom"><SearchIcon /></div> 
                        <h3>1. Search</h3>
                        <p>Find rooms or flatmates that match your criteria.</p>
                    </div>
                    <div className="step-spareroom">
                        <div className="step-icon-spareroom"><ConnectIcon /></div>
                        <h3>2. Connect</h3>
                        <p>Contact advertisers or post an ad to find your match.</p>
                    </div>
                    <div className="step-spareroom">
                        <div className="step-icon-spareroom"><MoveInIcon /></div>
                        <h3>3. Move In</h3>
                        <p>Arrange viewings and secure your new home.</p>
                    </div>
                </div>
            </div>

            {/* Popular Locations Section */}
            <div className="popular-locations-spareroom section-padding-spareroom bg-lightgrey-spareroom">
                <h2>Explore Popular Locations</h2>
                <div className="locations-grid-spareroom">
                    <Link to="/rooms?location=london" className="location-card-spareroom">
                        <img src={LondonLocationImage} alt="Popular Location London" />
                        <div className="location-name-spareroom">London</div>
                    </Link>
                    <Link to="/rooms?location=manchester" className="location-card-spareroom">
                        <img src={ManchesterLocationImage} alt="Popular Location Manchester" />
                        <div className="location-name-spareroom">Manchester</div>
                    </Link>
                    <Link to="/rooms?location=birmingham" className="location-card-spareroom">
                        <img src={BirminghamLocationImage} alt="Popular Location Birmingham" />
                        <div className="location-name-spareroom">Birmingham</div>
                    </Link>
                    {/* Add more as needed */}
                </div>
                <Link to="/all-locations" className="view-all-button-spareroom">View All Locations</Link>
            </div>
            
            {/* Testimonials Section - Reusing existing structure with new class names for styling */}
            <div className="testimonials-section-spareroom section-padding-spareroom">
                <h2>What Our Users Say</h2>
                <div className="testimonial-card-spareroom">
                    <p>“With RoomRentor, finding a place to rent was easier than ever! I moved into my apartment in under a week.”</p>
                    <p className="testimonial-author-spareroom">- Sarah M.</p>
                </div>
                <div className="testimonial-card-spareroom">
                    <p>“The search filters helped me narrow my options and find exactly what I wanted in my city without stress.”</p>
                    <p className="testimonial-author-spareroom">- James B.</p>
                </div>
            </div>

            {/* Call to Action / Post Ad Section */}
            <div className="post-ad-cta-spareroom section-padding-spareroom bg-lightgrey-spareroom">
                <h2>Got a Room to Rent or Looking for a Flatmate?</h2>
                <p>Reach hundreds of potential tenants and flatmates by posting your ad today.</p>
                <Link to="/post-ad" className="post-ad-button-spareroom">Post Your Ad FREE</Link>
            </div>

        </div>
    );
};

export default Home;