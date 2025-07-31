'use client'
import { useState, FormEvent, ChangeEvent } from "react";
import { supabase } from '../supabase-client';

export default function Page() {
    const [newTask, setNewtask] = useState({name: "", password: ""});
  return <div className="login-container">
        <div className="form-content">
            <div className="logo-section">
                <img src="/Img/LOGO.jpg" alt="Art-Haven Logo" className="logo-image"/>
                <div className="logo">
                    <h1>Art-Haven</h1>
                </div>
            </div>
            <p className="subtitle">Access your creative sanctuary</p>
            
            <div className="test-info">
                <strong>Warning:</strong> Make sure to enter a strong password and remmeber it
            </div>
            
            <div id="errorMessage" className="error-message"></div>
            <div id="successMessage" className="success-message"></div>
            
            <form id="loginForm">
                <div className="form-group">
                    <label htmlFor="email">Email Address</label>
                    <input type="email" id="email" name="email" required placeholder="Enter any valid email"/>
                </div>
                
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" name="password" required placeholder="Enter any password (6+ chars)"/>
                </div>
                
                <div className="form-options">
                    <div className="remember-me">
                        <input type="checkbox" id="remember" name="remember"/>
                        <label htmlFor="remember">Remember me</label>
                    </div>
                    <a href="#" className="forgot-password">Forgot password?</a>
                </div>
                
                <button type="submit" className="login-btn" id="loginBtn">
                    <span className="spinner" id="spinner"></span>
                    <span id="btnText">Sign Up to Art-Haven</span>
                </button>
            </form>
            
            <div className="divider"></div>
            <div className="signup-link">
                Already have an account? <a href="Create_portfolio.html">log in</a>
            </div>
        </div>
    </div>

}