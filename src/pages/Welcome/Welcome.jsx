import React from 'react';
import './Welcome.css'
import { useNavigate } from 'react-router-dom';

function Welcome() {
    const navigate = useNavigate()
    return (
      <div className="hero-container">
        <h1>Welcome to GDC Club</h1>
        <p>We are a community of student developers who love to create and share our passion for Coding.</p>
        <button style={{backgroundColor:'whitesmoke'}} className="btn" onClick={() => navigate('/signup')}>Join Now</button>
      </div>
    );
  }
  
export default Welcome