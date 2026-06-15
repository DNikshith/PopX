import React from 'react'
import { useNavigate } from 'react-router-dom'
import './Welcome.css'

export default function Welcome() {
  const navigate = useNavigate()

  return (
    <div className="welcome-container">
      <div className="welcome-content">
        <h1 className="welcome-title">Welcome to PopX</h1>
        <p className="welcome-subtitle">
          Create your account, explore PopX features, and get started in a few simple steps.
        </p>
      </div>

      <div className="welcome-actions">
        <button
          className="btn btn-primary"
          onClick={() => navigate('/register')}
        >
          Create Account
        </button>
        <button
          className="btn btn-secondary"
          onClick={() => navigate('/login')}
        >
          Already Registered? Login
        </button>
      </div>
    </div>
  )
}
