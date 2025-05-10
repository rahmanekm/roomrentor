import React, { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import signupIcon from '../../images/add-friend.png'; // Using the existing add-friend icon
import './signup.css'; // Will add styles here

const Signup = () => { // Changed to const Signup
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    // const [phone_number, setPhone_number] = useState(''); // Optional: can be added back if needed

    let navigate = useNavigate();

    const onSubmit = event => {
        event.preventDefault();
        if (password !== confirmPassword) {
            alert("Passwords do not match!"); // Simple validation
            return;
        }
        // Add actual signup logic here
        console.log("Signup attempt with:", name, email, password);
        navigate("/login"); // Navigate to login on successful signup (placeholder)
    };

    return (
        <div className="auth-page-spareroom"> {/* Reusing class from login.css for page layout */}
            <div className="auth-form-container-spareroom"> {/* Reusing class from login.css for form card */}
                <img className="auth-icon-spareroom" src={signupIcon} alt="Signup Icon" />
                <h2>Create Your Account</h2>
                <p className="auth-subheading-spareroom">Join RoomRentor to find your perfect space or flatmate.</p>
                
                <form onSubmit={onSubmit} className="auth-form-spareroom">
                    <div className="form-group-spareroom">
                        <label htmlFor="name">Full Name</label>
                        <input 
                            type="text" 
                            id="name"
                            value={name}
                            onChange={event => setName(event.target.value)}
                            required 
                            placeholder="Enter your full name"
                            className="form-input-spareroom"
                        />
                    </div>

                    <div className="form-group-spareroom">
                        <label htmlFor="email">Email Address</label>
                        <input 
                            type="email" 
                            id="email"
                            value={email}
                            onChange={event => setEmail(event.target.value)}
                            required 
                            placeholder="you@example.com"
                            className="form-input-spareroom"
                        />
                    </div>

                    <div className="form-group-spareroom">
                        <label htmlFor="password">Password</label>
                        <input 
                            type="password" 
                            id="password"
                            value={password}
                            onChange={event => setPassword(event.target.value)}
                            required 
                            placeholder="Create a password (min. 6 characters)"
                            className="form-input-spareroom"
                            minLength="6"
                        />
                    </div>

                    <div className="form-group-spareroom">
                        <label htmlFor="confirmPassword">Confirm Password</label>
                        <input 
                            type="password" 
                            id="confirmPassword"
                            value={confirmPassword}
                            onChange={event => setConfirmPassword(event.target.value)}
                            required 
                            placeholder="Re-enter your password"
                            className="form-input-spareroom"
                            minLength="6"
                        />
                    </div>
                    
                    {/* Add terms and conditions checkbox if needed */}
                    {/* <div className="form-group-spareroom terms-group-spareroom">
                        <input type="checkbox" id="terms" required />
                        <label htmlFor="terms">I agree to the <Link to="/terms" className="auth-link-spareroom">Terms & Conditions</Link></label>
                    </div> */}

                    <button type="submit" className="form-button-spareroom">Create Account</button>
                </form>
                
                <div className="auth-switch-spareroom">
                    <p>Already have an account? <Link to="/login" className="auth-link-spareroom bold">Log In</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Signup;