import React from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Welcome from './pages/Welcome.jsx'
import Login from './pages/Login.jsx'
import Register from './pages/Register.jsx'
import AccountSettings from './pages/AccountSettings.jsx'

export default function App() {
  return (
    <BrowserRouter>
      <div className="phone-frame">
        <div className="screen">
          <Routes>
            <Route path="/" element={<Navigate to="/welcome" replace />} />
            <Route path="/welcome" element={<Welcome />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/account-settings" element={<AccountSettings />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  )
}
