import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './Login.css'

export default function Login() {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({ email: '', password: '' })

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const isFormValid = formData.email.trim() !== '' && formData.password.trim() !== ''

  const handleLogin = (e) => {
    e.preventDefault()
    if (isFormValid) {
      navigate('/account-settings')
    }
  }

  return (
    <div className="login-container">
      <div className="login-header">
        <h1 className="login-title">Signin to your PopX account</h1>
        <p className="login-subtitle">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit,
        </p>
      </div>

      <form className="login-form" onSubmit={handleLogin}>
        <div className="input-group">
          <label className="input-label" htmlFor="email">
            Email Address
          </label>
          <input
            id="email"
            name="email"
            type="email"
            className="input-field"
            placeholder="Enter email address"
            value={formData.email}
            onChange={handleChange}
          />
        </div>

        <div className="input-group">
          <label className="input-label" htmlFor="password">
            Password
          </label>
          <input
            id="password"
            name="password"
            type="password"
            className="input-field"
            placeholder="Enter password"
            value={formData.password}
            onChange={handleChange}
          />
        </div>

        <button
          type="submit"
          className={`btn-login ${isFormValid ? 'btn-login--active' : 'btn-login--disabled'}`}
          disabled={!isFormValid}
        >
          Login
        </button>
      </form>
    </div>
  )
}
