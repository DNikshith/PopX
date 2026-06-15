import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './Register.css'

export default function Register() {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    password: '',
    companyName: '',
    isAgency: 'yes',
  })

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    navigate('/account-settings')
  }

  const isFormValid =
    formData.fullName.trim() !== '' &&
    formData.phone.trim() !== '' &&
    formData.email.trim() !== '' &&
    formData.password.trim() !== ''

  return (
    <div className="register-container">
      <div className="register-header">
        <h1 className="register-title">Create your PopX account</h1>
      </div>

      <form className="register-form" onSubmit={handleSubmit}>
        <div className="input-group">
          <label className="input-label" htmlFor="fullName">
            Full Name<span className="required">*</span>
          </label>
          <input
            id="fullName"
            name="fullName"
            type="text"
            className="input-field"
            placeholder="Marry Doe"
            value={formData.fullName}
            onChange={handleChange}
          />
        </div>

        <div className="input-group">
          <label className="input-label" htmlFor="phone">
            Phone number<span className="required">*</span>
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            className="input-field"
            placeholder="Marry Doe"
            value={formData.phone}
            onChange={handleChange}
          />
        </div>

        <div className="input-group">
          <label className="input-label" htmlFor="email">
            Email address<span className="required">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            className="input-field"
            placeholder="Marry Doe"
            value={formData.email}
            onChange={handleChange}
          />
        </div>

        <div className="input-group">
          <label className="input-label" htmlFor="password">
            Password <span className="required">*</span>
          </label>
          <input
            id="password"
            name="password"
            type="password"
            className="input-field"
            placeholder="Marry Doe"
            value={formData.password}
            onChange={handleChange}
          />
        </div>

        <div className="input-group">
          <label className="input-label" htmlFor="companyName">
            Company name
          </label>
          <input
            id="companyName"
            name="companyName"
            type="text"
            className="input-field"
            placeholder="Marry Doe"
            value={formData.companyName}
            onChange={handleChange}
          />
        </div>

        <div className="agency-group">
          <p className="agency-label">
            Are you an Agency?<span className="required">*</span>
          </p>
          <div className="radio-group">
            <label className="radio-label">
              <input
                type="radio"
                name="isAgency"
                value="yes"
                checked={formData.isAgency === 'yes'}
                onChange={handleChange}
                className="radio-input"
              />
              <span className="radio-custom"></span>
              Yes
            </label>
            <label className="radio-label">
              <input
                type="radio"
                name="isAgency"
                value="no"
                checked={formData.isAgency === 'no'}
                onChange={handleChange}
                className="radio-input"
              />
              <span className="radio-custom"></span>
              No
            </label>
          </div>
        </div>

        <button
          type="submit"
          className={`btn-create ${isFormValid ? 'btn-create--active' : 'btn-create--disabled'}`}
          disabled={!isFormValid}
        >
          Create Account
        </button>
      </form>
    </div>
  )
}
