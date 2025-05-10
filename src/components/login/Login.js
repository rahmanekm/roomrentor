import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom"; // Added Link
import loginIcon from '../../images/user.png'; // Keep user icon for top of form
import './login.css'; // Will be rewritten

const Login = () => { // Changed to const Login for consistency
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    let navigate = useNavigate();

    const onSubmit = event => {
        event.preventDefault();
        // Add actual login logic here in the future
        console.log("Login attempt with:", email, password);
        navigate("/rooms"); // Navigate to rooms on successful login (placeholder)
    };

    return (
        <div className="auth-page-spareroom">
            <div className="auth-form-container-spareroom">
                <img className="auth-icon-spareroom" src={loginIcon} alt="Login Icon" />
                <h2>Welcome Back!</h2>
                <p className="auth-subheading-spareroom">Log in to continue to RoomRentor.</p>
                
                <form onSubmit={onSubmit} className="auth-form-spareroom">
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
                            placeholder="Enter your password"
                            className="form-input-spareroom"
                        />
                    </div>

                    <div className="form-options-spareroom">
                        {/* Add remember me checkbox if needed */}
                        <Link to="/forgot-password" className="auth-link-spareroom">Forgot Password?</Link>
                    </div>

                    <button type="submit" className="form-button-spareroom">Log In</button>
                </form>
                
                <div className="auth-switch-spareroom">
                    <p>Don't have an account? <Link to="/register" className="auth-link-spareroom bold">Sign Up</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Login; // Consistent export